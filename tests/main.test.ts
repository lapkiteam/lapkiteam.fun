import { describe, it, expect } from "vitest"

import { calcFitScale } from "../src/components/coverEditor"
import { Size } from "../src/model"

function calcFit(viewPortSize: Size, imageSize: Size) {
  const scale = calcFitScale(viewPortSize, imageSize)
  return {
    width: imageSize.width * scale,
    height: imageSize.height * scale,
  }
}

describe("calcFitScale", () => {
  it("image < canvas", () => {
    expect(
      calcFit({
        width: 10,
        height: 20,
      }, {
        width: 5,
        height: 10,
      })
    )
      .toStrictEqual({
        width: 5,
        height: 10,
      })
  })
  it("imageWidth > canvasWidth && imageHeight > canvasHeight", () => {
    expect(
      calcFit({
        width: 10,
        height: 20,
      }, {
        width: 20,
        height: 10,
      })
    )
      .toStrictEqual({
        width: 10,
        height: 5,
      })
  })
  it("imageWidth < canvasWidth && imageHeight > canvasHeight", () => {
    expect(
      calcFit({
        width: 10,
        height: 20,
      }, {
        width: 5,
        height: 40,
      })
    )
      .toStrictEqual({
        width: 2.5,
        height: 20,
      })
  })
  it("imageWidth - canvasWidth = 10 && imageHeight - canvasHeight = 5", () => {
    expect(
      calcFit({
        width: 10,
        height: 20,
      }, {
        width: 20,
        height: 25,
      })
    )
      .toStrictEqual({
        width: 10,
        height: 12.5,
      })
  })
  it("imageWidth - canvasWidth = 5 && imageHeight - canvasHeight = 10", () => {
    expect(
      calcFit({
        width: 10,
        height: 20,
      }, {
        width: 15,
        height: 40,
      })
    )
      .toStrictEqual({
        width: 7.5,
        height: 20,
      })
  })
})
