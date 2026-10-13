import Foundation
import Vision
import CoreImage
import CoreImage.CIFilterBuiltins
import ImageIO
import UniformTypeIdentifiers

// Usage: swift cutout.swift <input.jpg> <out-cutout.png> <out-mask.png>
let args = CommandLine.arguments
guard args.count == 4 else {
  print("usage: cutout <in> <out-cutout.png> <out-mask.png>")
  exit(1)
}
let inURL = URL(fileURLWithPath: args[1])
let outURL = URL(fileURLWithPath: args[2])
let maskURL = URL(fileURLWithPath: args[3])

guard let input = CIImage(contentsOf: inURL, options: [.applyOrientationProperty: true]) else {
  print("cannot read input")
  exit(1)
}

let handler = VNImageRequestHandler(ciImage: input, options: [:])
let request = VNGenerateForegroundInstanceMaskRequest()
do {
  try handler.perform([request])
} catch {
  print("vision failed: \(error)")
  exit(1)
}
guard let result = request.results?.first else {
  print("no foreground found")
  exit(1)
}

do {
  let maskBuffer = try result.generateScaledMaskForImage(forInstances: result.allInstances, from: handler)
  let mask = CIImage(cvPixelBuffer: maskBuffer)
  let masked = try result.generateMaskedImage(ofInstances: result.allInstances, from: handler, croppedToInstancesExtent: false)
  let maskedImage = CIImage(cvPixelBuffer: masked)

  let ctx = CIContext()
  let cs = CGColorSpace(name: CGColorSpace.sRGB)!
  try ctx.writePNGRepresentation(of: maskedImage, to: outURL, format: .RGBA8, colorSpace: cs)
  try ctx.writePNGRepresentation(of: mask, to: maskURL, format: .L8, colorSpace: CGColorSpace(name: CGColorSpace.linearGray)!)
  print("ok", maskedImage.extent.size, mask.extent.size)
} catch {
  print("mask failed: \(error)")
  exit(1)
}
