package com.reactnativesamples;

import android.support.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.Map;
import java.util.HashMap;

public class NativeInfo extends ReactContextBaseJavaModule {

    public NativeInfo(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

    @Override
    public String getName() {
        return "NativeInfo";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
//        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
//        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void getDeviceName(Callback callback) {
        callback.invoke(null, "Nexus");
    }

    @ReactMethod
    public void getPlatformName(Promise p) {
        try {
            p.resolve("Android");
        } catch (Exception e) {
            p.reject(e.getMessage());
        }
    }

    @ReactMethod
    public void sendUserName() {
        WritableMap map = Arguments.createMap();
        map.putString("userName", "Daniel Jung");

        this.sendEvent(getReactApplicationContext(), "onReceived", map);
    }
}
