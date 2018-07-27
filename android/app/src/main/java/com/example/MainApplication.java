package com.example;

import android.support.annotation.Nullable;
import java.util.Arrays;
import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.BV.LinearGradient.LinearGradientPackage;
import java.util.List;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }
    protected List getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.asList(
        // eg. new VectorIconsPackage()
            new LinearGradientPackage()
        );
    }
    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }
    
}
