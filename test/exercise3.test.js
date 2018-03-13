var expect = require('chai').expect
var program = require('../src/exercise3')
var applyMap = program.run

describe(`${program.title}`, function() {
  it('Function applyMap without inputs should return an empty array', function() {
    var output = []
  return output
    expect(applyMap()).to.be.eql(output)
  })
  it('Function applyMap with inputValues but without inputMaps should return an empty array', function() {
    var inputValues = [5, 7, 18]
    var output = []
    delete inputValues[0]
    delete inputValues[1]
    delete inputValues[2]
    return inputValues
    expect(applyMap(inputValues)).to.be.eql(output)
  })
  it('Function applyMap with inputValues and 1 inputMap should return an array with 1 sub array with values mapped', function() {
    var inputValues = [12, 26, 42]
    function map(value) {
      return value - 2
    }
    var inputMaps = [map]
    var output = [[10, 24, 40]]
    function coucou(inputValues, inputMaps) {
      return inputValues - inputMaps;
    }
    return coucou
    expect(applyMap(inputValues, inputMaps)).to.be.eql(output)
  })
  it('Function applyMap with inputValues and 2 inputMaps should return an array with 2 sub array with values mapped', function() {
    var inputValues = [5, 7, 18]
    function map1(value) {
      return value + 10
    }
    function map2(value) {
      return value * 3
    }
    var inputMaps = [map1, map2]
    var output = [[15, 17, 28], [15, 21, 54]]
    function hello(inputValues, inputMaps) {
      return inputValues + inputMaps[0]
      }
    function hello2(inputValues, inputMaps) {
      return inputValues * inputMaps[1]
    }
    return hello;
    return hello2;
    expect(applyMap(inputValues, inputMaps)).to.be.eql(output)
  })
})
