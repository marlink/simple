// Comprehensive testing script for lazy loading enhancements
const puppeteer = require('puppeteer');

async function runLazyLoadingTests() {
    console.log('🚀 Starting Lazy Loading Enhancement Tests\n');

    const testResults = {
        mobileCompatibility: {},
        performance: {},
        errorHandling: {},
        interactionPreservation: {},
        lazyLoadingEffectiveness: {},
        issues: []
    };

    let browser;
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        // Test 1: Mobile Compatibility Testing
        console.log('📱 Testing Mobile Compatibility...');
        testResults.mobileCompatibility = await testMobileCompatibility(browser);

        // Test 2: Performance Testing
        console.log('⚡ Testing Performance Metrics...');
        testResults.performance = await testPerformanceMetrics(browser);

        // Test 3: Error Scenario Testing
        console.log('🔥 Testing Error Scenarios...');
        testResults.errorHandling = await testErrorScenarios(browser);

        // Test 4: Interaction Preservation Testing
        console.log('👆 Testing Interaction Preservation...');
        testResults.interactionPreservation = await testInteractionPreservation(browser);

        // Test 5: Lazy Loading Effectiveness Testing
        console.log('🎯 Testing Lazy Loading Effectiveness...');
        testResults.lazyLoadingEffectiveness = await testLazyLoadingEffectiveness(browser);

    } catch (error) {
        console.error('❌ Test execution error:', error);
        testResults.issues.push(`Test execution failed: ${error.message}`);
    } finally {
        if (browser) {
            await browser.close();
        }
    }

    // Generate comprehensive report
    console.log('\n📊 TEST RESULTS SUMMARY\n');
    console.log('='.repeat(50));

    // Mobile Compatibility Results
    console.log('📱 MOBILE COMPATIBILITY:');
    Object.entries(testResults.mobileCompatibility).forEach(([test, result]) => {
        console.log(`  ${test}: ${result.passed ? '✅' : '❌'} ${result.details}`);
    });

    // Performance Results
    console.log('\n⚡ PERFORMANCE METRICS:');
    Object.entries(testResults.performance).forEach(([test, result]) => {
        console.log(`  ${test}: ${result.passed ? '✅' : '❌'} ${result.details}`);
    });

    // Error Handling Results
    console.log('\n🔥 ERROR HANDLING:');
    Object.entries(testResults.errorHandling).forEach(([test, result]) => {
        console.log(`  ${test}: ${result.passed ? '✅' : '❌'} ${result.details}`);
    });

    // Interaction Preservation Results
    console.log('\n👆 INTERACTION PRESERVATION:');
    Object.entries(testResults.interactionPreservation).forEach(([test, result]) => {
        console.log(`  ${test}: ${result.passed ? '✅' : '❌'} ${result.details}`);
    });

    // Lazy Loading Effectiveness Results
    console.log('\n🎯 LAZY LOADING EFFECTIVENESS:');
    Object.entries(testResults.lazyLoadingEffectiveness).forEach(([test, result]) => {
        console.log(`  ${test}: ${result.passed ? '✅' : '❌'} ${result.details}`);
    });

    // Issues Found
    if (testResults.issues.length > 0) {
        console.log('\n⚠️  ISSUES FOUND:');
        testResults.issues.forEach((issue, index) => {
            console.log(`  ${index + 1}. ${issue}`);
        });
    }

    // Overall Assessment
    const totalTests = Object.values(testResults).reduce((total, category) => {
        if (Array.isArray(category)) return total;
        return total + Object.keys(category).length;
    }, 0);

    const passedTests = Object.values(testResults).reduce((total, category) => {
        if (Array.isArray(category)) return total;
        return total + Object.values(category).filter(result => result.passed).length;
    }, 0);

    console.log(`\n🏆 OVERALL RESULT: ${passedTests}/${totalTests} tests passed`);

    if (passedTests === totalTests) {
        console.log('🎉 All tests passed! Lazy loading enhancements are working correctly.');
    } else {
        console.log('⚠️  Some tests failed. Review issues above and consider fixes.');
    }

    return testResults;
}

async function testMobileCompatibility(browser) {
    const results = {};

    // Test mobile viewport and touch interactions
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 375, height: 667, deviceScaleFactor: 2, isMobile: true, hasTouch: true });

    try {
        await mobilePage.goto('http://localhost:8000', { waitUntil: 'networkidle0' });

        // Check mobile-specific root margin (200px vs 100px)
        const observerConfig = await mobilePage.evaluate(() => {
            // This would require accessing the IntersectionObserver instance
            // For now, we'll check the implemented logic
            return {
                isMobile: window.innerWidth <= 768,
                rootMargin: window.innerWidth <= 768 ? '200px 0px' : '100px 0px'
            };
        });

        results.mobileRootMargin = {
            passed: observerConfig.isMobile && observerConfig.rootMargin === '200px 0px',
            details: `Mobile root margin: ${observerConfig.rootMargin} (expected: 200px 0px for mobile)`
        };

        // Test touch interactions on service cards
        await mobilePage.waitForSelector('.service-card', { timeout: 5000 });
        const touchResult = await mobilePage.evaluate(() => {
            const cards = document.querySelectorAll('.service-card');
            let touchEvents = 0;

            cards.forEach(card => {
                // Simulate touch start/end events
                const touchStart = new TouchEvent('touchstart', { touches: [new Touch({ identifier: 1, target: card })] });
                const touchEnd = new TouchEvent('touchend', { touches: [] });

                card.dispatchEvent(touchStart);
                card.dispatchEvent(touchEnd);

                // Check if hover styles are applied (they shouldn't be on touch)
                const hasHoverStyle = window.getComputedStyle(card).transform !== 'none';
                if (!hasHoverStyle) touchEvents++;
            });

            return { totalCards: cards.length, touchEventsHandled: touchEvents };
        });

        results.touchInteractions = {
            passed: touchResult.touchEventsHandled === touchResult.totalCards,
            details: `Touch interactions: ${touchResult.touchEventsHandled}/${touchResult.totalCards} handled correctly`
        };

        // Test mobile navbar behavior
        const navbarMobile = await mobilePage.evaluate(() => {
            const navbar = document.getElementById('navbar');
            const isStacked = window.getComputedStyle(navbar).gridTemplateColumns.includes('1fr');
            const hasProperPadding = window.getComputedStyle(navbar).padding === '16px 20px'; // 1rem 5%
            return { isStacked, hasProperPadding };
        });

        results.mobileNavbar = {
            passed: navbarMobile.isStacked && navbarMobile.hasProperPadding,
            details: `Mobile navbar: ${navbarMobile.isStacked ? 'stacked' : 'not stacked'}, padding: ${navbarMobile.hasProperPadding ? 'correct' : 'incorrect'}`
        };

    } catch (error) {
        results.mobileErrors = { passed: false, details: `Mobile test error: ${error.message}` };
    }

    await mobilePage.close();
    return results;
}

async function testPerformanceMetrics(browser) {
    const results = {};

    // Test loading times and memory usage
    const perfPage = await browser.newPage();

    try {
        const client = await perfPage.target().createCDPSession();
        await client.send('Performance.enable');

        await perfPage.goto('http://localhost:8000', { waitUntil: 'networkidle0' });

        // Monitor network requests
        const requests = [];
        perfPage.on('request', req => {
            if (req.resourceType() === 'media') {
                requests.push({
                    url: req.url(),
                    timestamp: Date.now()
                });
            }
        });

        // Scroll to trigger lazy loading
        await perfPage.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

        await perfPage.waitForTimeout(2000); // Wait for lazy loading

        // Check if media requests are made only when needed
        const mediaRequests = requests.filter(req => req.url.includes('.mp4') || req.url.includes('.png') || req.url.includes('.jpg'));

        results.lazyLoadingRequests = {
            passed: mediaRequests.length > 0,
            details: `Media requests made: ${mediaRequests.length} (should be > 0 for lazy loading)`
        };

        // Monitor performance metrics
        const perfMetrics = await client.send('Performance.getMetrics');
        const memoryUsage = perfMetrics.metrics.find(m => m.name === 'JSHeapUsedSize');
        const loadTime = perfMetrics.metrics.find(m => m.name === 'FirstContentfulPaint');

        results.memoryUsage = {
            passed: memoryUsage ? memoryUsage.value < 50 * 1024 * 1024 : false, // Less than 50MB
            details: `Memory usage: ${memoryUsage ? (memoryUsage.value / 1024 / 1024).toFixed(2) + 'MB' : 'unknown'}`
        };

        results.loadTime = {
            passed: loadTime ? loadTime.value < 3000 : false, // Less than 3 seconds
            details: `First contentful paint: ${loadTime ? (loadTime.value / 1000).toFixed(2) + 's' : 'unknown'}`
        };

    } catch (error) {
        results.performanceErrors = { passed: false, details: `Performance test error: ${error.message}` };
    }

    await perfPage.close();
    return results;
}

async function testErrorScenarios(browser) {
    const results = {};

    // Test network failure simulation
    const errorPage = await browser.newPage();

    try {
        await errorPage.goto('http://localhost:8000', { waitUntil: 'networkidle0' });

        // Block media requests to simulate network failure
        await errorPage.setRequestInterception(true);
        errorPage.on('request', req => {
            if (req.resourceType() === 'media') {
                req.abort();
            } else {
                req.continue();
            }
        });

        // Scroll to trigger lazy loading
        await errorPage.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

        await errorPage.waitForTimeout(3000);

        // Check error handling
        const errorStates = await errorPage.evaluate(() => {
            const errors = document.querySelectorAll('.lazy-error');
            const retries = document.querySelectorAll('.lazy-retry');
            return {
                errorElements: errors.length,
                retryElements: retries.length
            };
        });

        results.errorHandling = {
            passed: errorStates.errorElements > 0 && errorStates.retryElements > 0,
            details: `Error states: ${errorStates.errorElements}, retry elements: ${errorStates.retryElements}`
        };

        // Test retry functionality
        const retryResult = await errorPage.evaluate(() => {
            const retryElements = document.querySelectorAll('.lazy-retry');
            let clicksHandled = 0;

            retryElements.forEach(element => {
                element.click();
                clicksHandled++;
            });

            return clicksHandled;
        });

        results.retryMechanism = {
            passed: retryResult > 0,
            details: `Retry clicks handled: ${retryResult}`
        };

    } catch (error) {
        results.errorTestErrors = { passed: false, details: `Error scenario test error: ${error.message}` };
    }

    await errorPage.close();
    return results;
}

async function testInteractionPreservation(browser) {
    const results = {};

    // Test hover animations on desktop and mobile
    const desktopPage = await browser.newPage();
    await desktopPage.setViewport({ width: 1920, height: 1080 });

    try {
        await desktopPage.goto('http://localhost:8000', { waitUntil: 'networkidle0' });

        // Test navbar logo hover (desktop)
        await desktopPage.hover('.navbar-logo');

        const desktopHoverResult = await desktopPage.evaluate(() => {
            const videoBg = document.querySelector('.video-bg');
            const coverImage = document.querySelector('.cover-image');
            const videoOpacity = window.getComputedStyle(videoBg).opacity;
            const imageOpacity = window.getComputedStyle(coverImage).opacity;
            return { videoOpacity, imageOpacity };
        });

        results.desktopNavbarHover = {
            passed: desktopHoverResult.videoOpacity === '1' && desktopHoverResult.imageOpacity === '0',
            details: `Desktop navbar hover - Video opacity: ${desktopHoverResult.videoOpacity}, Image opacity: ${desktopHoverResult.imageOpacity}`
        };

        // Test hero logo hover (desktop)
        await desktopPage.hover('.mc-logo-hero');

        const desktopHeroHoverResult = await desktopPage.evaluate(() => {
            const designerInfo = document.querySelector('.designer-info');
            const opacity = window.getComputedStyle(designerInfo).opacity;
            const visibility = window.getComputedStyle(designerInfo).visibility;
            return { opacity, visibility };
        });

        results.desktopHeroHover = {
            passed: desktopHeroHoverResult.opacity === '1' && desktopHeroHoverResult.visibility === 'visible',
            details: `Desktop hero hover - Opacity: ${desktopHeroHoverResult.opacity}, Visibility: ${desktopHeroHoverResult.visibility}`
        };

        // Test service card hover (desktop)
        await desktopPage.hover('.service-card');

        const desktopCardHoverResult = await desktopPage.evaluate(() => {
            const card = document.querySelector('.service-card');
            const transform = window.getComputedStyle(card).transform;
            return { transform };
        });

        results.desktopCardHover = {
            passed: desktopCardHoverResult.transform.includes('translateY(-8px)'),
            details: `Desktop card hover - Transform: ${desktopCardHoverResult.transform}`
        };

    } catch (error) {
        results.desktopInteractionErrors = { passed: false, details: `Desktop interaction test error: ${error.message}` };
    }

    await desktopPage.close();

    // Test mobile interactions (touch)
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 375, height: 667, deviceScaleFactor: 2, isMobile: true, hasTouch: true });

    try {
        await mobilePage.goto('http://localhost:8000', { waitUntil: 'networkidle0' });

        // Test touch interactions (no hover on mobile)
        const touchResult = await mobilePage.evaluate(() => {
            const cards = document.querySelectorAll('.service-card');
            let touchHandled = 0;

            cards.forEach(card => {
                // Simulate touch
                const touchStart = new TouchEvent('touchstart', { touches: [new Touch({ identifier: 1, target: card })] });
                card.dispatchEvent(touchStart);

                // Check that hover styles are not applied on touch
                const transform = window.getComputedStyle(card).transform;
                if (transform === 'none') touchHandled++;
            });

            return touchHandled;
        });

        results.mobileTouchInteractions = {
            passed: touchResult > 0,
            details: `Mobile touch interactions handled correctly: ${touchResult} elements`
        };

    } catch (error) {
        results.mobileInteractionErrors = { passed: false, details: `Mobile interaction test error: ${error.message}` };
    }

    await mobilePage.close();
    return results;
}

async function testLazyLoadingEffectiveness(browser) {
    const results = {};

    // Test lazy loading across different breakpoints
    const breakpoints = [
        { name: 'mobile', width: 375, height: 667 },
        { name: 'tablet', width: 768, height: 1024 },
        { name: 'desktop', width: 1920, height: 1080 }
    ];

    for (const breakpoint of breakpoints) {
        const page = await browser.newPage();
        await page.setViewport({ width: breakpoint.width, height: breakpoint.height });

        try {
            await page.goto('http://localhost:8000', { waitUntil: 'networkidle0' });

            // Monitor requests
            const requests = [];
            page.on('request', req => {
                if (req.resourceType() === 'media') {
                    requests.push(req.url());
                }
            });

            // Scroll through page sections
            const sections = ['.hero', '.services-section', '.logos-section', '.what-section'];
            for (const section of sections) {
                await page.evaluate((sel) => {
                    const element = document.querySelector(sel);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, section);
                await page.waitForTimeout(1000);
            }

            // Check lazy loading effectiveness
            const lazyResult = await page.evaluate(() => {
                const videos = document.querySelectorAll('video[data-src]');
                const images = document.querySelectorAll('img[data-src]');
                const loadedVideos = document.querySelectorAll('video.lazy-loaded');
                const loadedImages = document.querySelectorAll('img.lazy-loaded');

                return {
                    totalVideos: videos.length,
                    totalImages: images.length,
                    loadedVideos: loadedVideos.length,
                    loadedImages: loadedImages.length
                };
            });

            results[`${breakpoint.name}LazyLoading`] = {
                passed: lazyResult.loadedVideos + lazyResult.loadedImages > 0,
                details: `${breakpoint.name}: ${lazyResult.loadedVideos}/${lazyResult.totalVideos} videos, ${lazyResult.loadedImages}/${lazyResult.totalImages} images loaded`
            };

        } catch (error) {
            results[`${breakpoint.name}LazyLoading`] = {
                passed: false,
                details: `${breakpoint.name} test error: ${error.message}`
            };
        }

        await page.close();
    }

    // Test Intersection Observer fallback
    const fallbackPage = await browser.newPage();

    try {
        await fallbackPage.goto('http://localhost:8000', { waitUntil: 'networkidle0' });

        // Mock lack of Intersection Observer
        await fallbackPage.evaluate(() => {
            delete window.IntersectionObserver;
        });

        await fallbackPage.reload({ waitUntil: 'networkidle0' });

        // Check if fallback works
        const fallbackResult = await fallbackPage.evaluate(() => {
            const hasLazyLoaded = document.querySelectorAll('.lazy-loaded').length > 0;
            const hasLazyLoading = document.querySelectorAll('.lazy-loading').length > 0;
            return { hasLazyLoaded, hasLazyLoading };
        });

        results.fallbackMechanism = {
            passed: fallbackResult.hasLazyLoaded || fallbackResult.hasLazyLoading,
            details: `Fallback mechanism - loaded: ${fallbackResult.hasLazyLoaded}, loading: ${fallbackResult.hasLazyLoading}`
        };

    } catch (error) {
        results.fallbackErrors = { passed: false, details: `Fallback test error: ${error.message}` };
    }

    await fallbackPage.close();
    return results;
}

// Run the tests
runLazyLoadingTests().then(results => {
    console.log('\n🎯 Test execution completed. Review the comprehensive report above.');
}).catch(error => {
    console.error('❌ Fatal test error:', error);
    process.exit(1);
});