//
//  LightView.swift
//  TrafficLight
//
//  Created by Nhan Huynh on 12/2/20.
//

import UIKit

class LightView: UIView {
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.addSubview(view)
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init has not been implemented")
  }
  
  lazy var view: UIView = {
    let view = UIView.init()
    return view
  }()
}
