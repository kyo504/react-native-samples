//
//  NativeInfoModule.m
//  ReactNativeSamples
//
//  Created by Daniel Jung on 2018. 6. 29..
//  Copyright © 2018년 Facebook. All rights reserved.
//

#import "NativeInfo.h"
#import <UIKit/UIKit.h>

@implementation NativeInfo
{
  bool hasListeners;
}

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  return @{ @"firstDayOfTheWeek": @"Monday" };
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"onReceived"];
}

// Will be called when this module's first listener is added.
-(void)startObserving {
  hasListeners = YES;
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
  hasListeners = NO;
}

//exports a method getDeviceName to javascript
RCT_EXPORT_METHOD(getDeviceName: (RCTResponseSenderBlock)callback)
{
  @try{
    NSString *deviceName = [[UIDevice currentDevice] name];
    callback(@[[NSNull null], deviceName]);
  }
  @catch(NSException *exception){
    callback(@[exception.reason, [NSNull null]]);
  }
}

RCT_EXPORT_METHOD(sendUserName)
{
  [self sendEventWithName:@"onReceived" body:@{@"userName": @"Daniel Jung"}];
}

//exports a method getPlatformName to javascript
RCT_REMAP_METHOD(getPlatformName,
                 resolver: (RCTPromiseResolveBlock) resolve
                 rejector: (RCTPromiseRejectBlock) reject)
{
  resolve(@"iOS");
}

@end
