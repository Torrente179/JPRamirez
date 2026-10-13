import Foundation
import Vision
import CoreImage
import CoreVideo

// Usage: swift person-matte.swift <input.jpg> <out-matte.png>
// Apple's person segmentation at .accurate quality: a soft matte tuned for
// people, with more hair detail than the generic foreground mask.
let args = CommandLine.arguments
guard args.count == 3 else {
  print("usage: person-matte <in> <out-matte.png>")
  exit(1)
}
let inURL = URL(fileURLWithPath: args[1])
let outURL = URL(fileURLWithPath: args[2])

guard let input = CIImage(contentsOf: inURL, options: [.applyOrientationProperty: true]) else {
  print("cannot read input")
  exit(1)
}

let request = VNGeneratePersonSegmentationRequest()
request.qualityLevel = .accurate
request.outputPixelFormat = kCVPixelFormatType_OneComponent8

let handler = VNImageRequestHandler(ciImage: input, options: [:])
do {
  try handler.perform([request])
} catch {
  print("vision failed: \(error)")
  exit(1)
}
guard let buffer = request.results?.first?.pixelBuffer else {
  print("no person found")
  exit(1)
}

var matte = CIImage(cvPixelBuffer: buffer)
let sx = input.extent.width / matte.extent.width
let sy = input.extent.height / matte.extent.height
matte = matte.transformed(by: CGAffineTransform(scaleX: sx, y: sy))

let ctx = CIContext()
do {
  try ctx.writePNGRepresentation(
    of: matte, to: outURL, format: .L8,
    colorSpace: CGColorSpace(name: CGColorSpace.linearGray)!)
  print("ok", CVPixelBufferGetWidth(buffer), CVPixelBufferGetHeight(buffer), "->", matte.extent.size)
} catch {
  print("write failed: \(error)")
  exit(1)
}
