//
//  Light.swift
//  TrafficLight
//
//  Created by Nhan Huynh on 12/2/20.
//

import Foundation
@objc(Light)
class Light: RCTViewManager {
  
  var lightView: LightView!
  
  override func view() -> UIView! {
    lightView = LightView()
    return lightView
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
