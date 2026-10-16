/* Unifi reference animation adapter. Original animation functions retained from
 * the D-j-View capture; Barba replaced by an explicit React mount/dispose lifecycle.
 * All vendors and Lottie assets are local. No backend services are recreated. */
(function () {
window.UnifiReference = {
  mount() {
    const $ = window.jQuery;
    const ScrollTrigger = window.ScrollTrigger;
    const ScrollSmoother = window.ScrollSmoother;
    const SplitText = window.SplitText;
    const ScrollToPlugin = window.ScrollToPlugin;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let disposed = false;
    const animations = [], swipers = [], splits = [], timers = [], observers = [];
    const ownedTriggers = new Set(ScrollTrigger.getAll());
    const tweens = [];
    const snapshots = [...document.querySelectorAll('html,body,.loading-container,.loading-container *,#smooth-wrapper,#smooth-wrapper *')].map(el => ({el, style:el.getAttribute('style'), cls:el.getAttribute('class'), id:el.getAttribute('id')}));
    const gsap = {...window.gsap};
    for (const method of ['to','from','fromTo','set','timeline']) gsap[method] = (...args) => { const result=window.gsap[method](...args); tweens.push(result); return result; };
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin);
    const setTimeout = (fn,ms) => { const id=window.setTimeout(()=>{if(!disposed)fn();},ms); timers.push(id); return id; };
    function TrackedSplitText(...args) { const instance=new SplitText(...args); splits.push(instance); return instance; }
    function TrackedSwiper(el,options) {
      if(reduced) options.speed=0;
      options.a11y = {enabled:true};
      const instance=new window.Swiper(el,options);swipers.push(instance);return instance;
    }
    const lottie = {loadAnimation(options) {
      const instance = window.lottie.loadAnimation(options);animations.push(instance);
      const add = instance.addEventListener.bind(instance);
      instance.addEventListener = (name,callback) => add(name,(...args)=>{ if(!disposed)callback(...args); });
      return instance;
    }};
    let smoother;
    let initLottieHeaderGradientbars;
    function cleanup() {
      if(disposed)return; disposed=true;
      document.documentElement.removeAttribute('data-unifi-ready');
      timers.forEach(id=>window.clearTimeout(id));
      observers.forEach(observer=>observer.disconnect());
      $('*').off('.unifiReference');
      animations.forEach(animation=>animation.destroy());
      ScrollTrigger.getAll().filter(trigger=>!ownedTriggers.has(trigger)).forEach(trigger=>trigger.kill(true));
      tweens.forEach(tween=>tween.kill());
      swipers.forEach(swiper=>{if(!swiper.destroyed)swiper.destroy(true,true);});
      smoother?.kill();
      [...splits].reverse().forEach(split=>split.revert());
      document.querySelectorAll('video').forEach(video=>video.pause());
      snapshots.forEach(({el,style,cls,id})=>{for(const [attr,value] of [['style',style],['class',cls],['id',id]]){if(value===null)el.removeAttribute(attr);else el.setAttribute(attr,value);}});
      document.documentElement.classList.remove('unifi-enhanced','unifi-reduced');
    }
function initLoader() {

  var tl = gsap.timeline();

	tl.set(".loading-screen", {
		y: "0vh",
	});

  tl.set("html", {
		cursor: "wait"
	});

  tl.call(function(){
    smoother.paused(true);
	});

  tl.set(".loading-container h4 .single-char", {
    opacity: 0,
    delay: .75,
  });

  tl.set(".loading-container .h4-wrap", {
    opacity: 1
  });

  tl.to("header .visuals .single-visual", {
    y: "7vw",
  });

  tl.to(".loading-container h4 .single-char", {
    duration: 0.01,
    opacity: 1,
    ease: "none",
    stagger: .04
  });

  tl.to(".loading-container .progress", {
		duration: 3,
		scaleX: 1,
		ease: "Expo.easeInOut",
  },"0");

  tl.set("header h1 .single-line-inner", {
    yPercent: 110,
  });

  tl.set("header h4 .single-char", {
    opacity: 0,
  });

  tl.set("header .vertical-lines .vertical-line", {
    scaleY: 0
  });

	tl.to(".loading-screen", {
		duration: 1,
		y: "-125vh",
		ease: "Expo.easeInOut"
  });

  tl.to(".loading-container .top-bar", {
		duration: 1,
		y: "125vh",
		ease: "Expo.easeInOut",
  },"<");

  tl.to("header h1 .single-line-inner", {
    duration: 0.8,
    yPercent: 0,
    ease: "Power3.easeOut",
    stagger: .2
  },"< 0.6");

  tl.to("header .vertical-lines .vertical-line", {
    scaleY: 1,
    duration: 1.2,
    ease: "Expo.easeOut",
    stagger: .1
  },"<");

  tl.to("header h4 .single-char", {
    duration: 0.01,
    opacity: 1,
    ease: "none",
    stagger: .04,
  },"<");

  tl.to(".home-header .visuals .single-visual", {
    duration: 1.6,
    y: "0vw",
    ease: "Power3.easeOut",
    stagger: -.04
  },"< -0.3");

  tl.set("html", {
		cursor: "auto",
	});

  tl.call(function(){
    smoother.paused(false);
	}, null, 3.35);

  tl.call(function(){
    initLottieHeaderGradientbars.playSegments([0], true);
	}, null, 3.35);

  tl.set(".loading-screen", {
		y: "125vh",
	});

}

function initSplitText() {

  var splitTextLines = new TrackedSplitText(".split-lines", {type: "lines, chars", linesClass: "single-line"});
  $('.split-lines .single-line').wrapInner('<div class="single-line-inner">');

  var splitTextChars = new TrackedSplitText(".split-chars", {type: "chars", charsClass: "single-char"});

}

/**
* Window Inner Height Check
*/
function initWindowInnerheight() { document.documentElement.style.setProperty('--vh', (innerHeight * .01) + 'px'); }

function initScrollTo() {
  $('[data-target]').on('click.unifiReference', function(event) {
    const target = document.querySelector(this.dataset.target);
    if (!target) return;
    event.preventDefault();
    if (reduced) target.scrollIntoView();
    else gsap.to(window, { duration: 1.6, scrollTo: {y: target, offsetY: 50}, ease: 'power3.inOut' });
  });
  $('.swiper-btn-next, .swiper-btn-prev').on('keydown.unifiReference', function(event) {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this.click(); }
  });
}

function initLazyLoad() { /* Captured images already have local src attributes. */ }

function initPlayVideoInview() {
  const observer = new IntersectionObserver(entries => entries.forEach(({target,isIntersecting}) => {
    if(isIntersecting && !reduced) target.play().catch(() => {}); else target.pause();
  }), {rootMargin:'150px'});
  document.querySelectorAll('video').forEach(video => observer.observe(video));
  observers.push(observer);
}

function initSwiperSlider() {

  // Custom slider tutorial
  // Tutorial: https://arnost.medium.com/creating-custom-slide-transitions-in-swiper-js-also-with-gsap-ac71f9badf53
  // Result: https://codepen.io/paralleluniv3rse/pen/yGQjMv

  $('.slider-cards').each(function(index){

    var sliderIndexID = 'slider-cards-id-' + index;
    $(this).attr('id', sliderIndexID);

    var sliderThis = $(this);

    // Init Slider 1: Primary
    var swiperSliderMain = document.querySelector('#' + sliderIndexID + ' .swiper-container-cards');
    var swiperMain = new TrackedSwiper(swiperSliderMain, {
      simulateTouch: true,
      loop: true,
      grabCursor: false,
      speed: 1200,
      navigation: {
        nextEl: '#' + sliderIndexID + ' .swiper-btn-next',
        prevEl: '#' + sliderIndexID + ' .swiper-btn-prev'
      },
      pagination: {
        el: '#' + sliderIndexID + ' .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><div class="progress"></div> ' + '</span>';
        },
      }
    });

    // GSAP Animation Progress Bar (Will trigger slider to slide)
    var tl = gsap.timeline({paused: true});

    // Retrigger Animation on Slide Change
    function singleSwiperSliderEnd() {
      // swiperMain.slideNext();
      // if (!reduced) tl.restart();
    }

    // Fraction-only carousels have no progress element; keep their timer without an empty GSAP target.
    const progressTargets = sliderThis.find('.progress');
    tl.to(progressTargets.length ? progressTargets : {scaleX: 0}, {
      duration: 10,
      scaleX: 1,
      ease: "Power1.easeInOut",
      onComplete: singleSwiperSliderEnd
    });

    // Reset Progress Bar On Slide Change
    swiperMain.on("slideChange", function () {
      // if (!reduced) tl.restart();
      addSwipeVisibleClass();
    });

    // Pause Carousel/Progress Bar On Hover
    sliderThis.find('.swiper-pagination, .swiper-btn-big').on('mouseenter.unifiReference', function() {
      tl.pause();
    });

    sliderThis.find('.swiper-pagination, .swiper-btn-big').on('mouseleave.unifiReference', function() {
      if (!reduced) tl.resume();
    });

    function addSwipeVisibleClass() {
      sliderThis.addClass('slider-is-transitioning');
      sliderThis.find('.swiper-slide').addClass('slide-is-transitioning');
      sliderThis.find('.swiper-slide-visible').removeClass('slide-is-transitioning');
      setTimeout(function() {
        sliderThis.removeClass('slider-is-transitioning');
        sliderThis.find('.swiper-slide').removeClass('slide-is-transitioning');
      }, 700);
    }

	});

  $('.slider-timeline').each(function(index){

    var sliderIndexID = 'slider-timeline-id-' + index;
    $(this).attr('id', sliderIndexID);

    var sliderThis = $(this);

    // Get Bullet Year/Label
    var bulletName = sliderThis.find('.swiper-slide').map(function() {
      return $(this).data('year');
    }).get();

    // Init Slider 1: Primary
    var swiperSliderMain = document.querySelector('#' + sliderIndexID + ' .swiper-container-timeline');
    var swiperMain = new TrackedSwiper(swiperSliderMain, {
      simulateTouch: true,
      autoHeight: true,
      direction: "vertical",
      loop: false,
      grabCursor: false,
      speed: 1200,
      pagination: {
        el: '#' + sliderIndexID + ' .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"><div class="progress"></div> ' + (bulletName[index]) + '</span>';
        },
      },
      scrollbar: {
        el: '#' + sliderIndexID + ' .swiper-scrollbar',
        draggable: true,
      },
    });

    // GSAP Animation Progress Bar (Will trigger slider to slide)
    var tl = gsap.timeline({paused: true});

    // Retrigger Animation on Slide Change
    function singleSwiperSliderEnd() {
      swiperMain.slideNext();
      if (!reduced) tl.restart();
    }

    // Fraction-only carousels have no progress element; keep their timer without an empty GSAP target.
    const progressTargets = sliderThis.find('.progress');
    tl.to(progressTargets.length ? progressTargets : {scaleX: 0}, {
      duration: 5,
      scaleX: 1,
      ease: "Power1.easeInOut",
      onComplete: singleSwiperSliderEnd
    });

    // Reset Progress Bar On Slide Change
    swiperMain.on("slideChange", function () {
      if (!reduced) tl.restart();
      addSwipeVisibleClass();
    });

    // Pause Carousel/Progress Bar On Hover
    sliderThis.find('.swiper-pagination, .swiper-scrollbar').on('mouseenter.unifiReference', function() {
      tl.pause();
    });

    sliderThis.find('.swiper-pagination, .swiper-scrollbar').on('mouseleave.unifiReference', function() {
      if (!reduced) tl.resume();
    });

    // Play/Pause Slider in viewport
    sliderThis.each(function() {
      let triggerElement = $(this);

      ScrollTrigger.create({
        trigger: triggerElement,
        start: '0% 120%',
        end: '100% -20%',
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      });

    });

    function addSwipeVisibleClass() {
      sliderThis.addClass('slider-is-transitioning');
      sliderThis.find('.swiper-slide').addClass('slide-is-transitioning');
      sliderThis.find('.swiper-slide-visible').removeClass('slide-is-transitioning');
      setTimeout(function() {
        sliderThis.removeClass('slider-is-transitioning');
        sliderThis.find('.swiper-slide').removeClass('slide-is-transitioning');
      }, 700);
    }

	});

  $('.slider-future').each(function(index){

    var sliderIndexID = 'slider-future-id-' + index;
    $(this).attr('id', sliderIndexID);

    var sliderThis = $(this);


    // Init Slider 1: Primary
    var swiperSliderMain = document.querySelector('#' + sliderIndexID + ' .swiper-container-future');
    var swiperMain = new TrackedSwiper(swiperSliderMain, {
      simulateTouch: true,
      loop: false,
      grabCursor: false,
      speed: 1200,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '#' + sliderIndexID + ' .swiper-btn-next',
        prevEl: '#' + sliderIndexID + ' .swiper-btn-prev'
      },
      scrollbar: {
        el: '#' + sliderIndexID + ' .swiper-scrollbar',
        draggable: true,
      },
      pagination: {
        el: '#' + sliderIndexID + ' .swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return '<div class="fractions">0' + current + '<span>/0' + total + '</span></div>';
        }
      },
    });

    // GSAP Animation Progress Bar (Will trigger slider to slide)
    var tl = gsap.timeline({paused: true});

    // Retrigger Animation on Slide Change
    function singleSwiperSliderEnd() {
      swiperMain.slideNext();
      if (!reduced) tl.restart();
    }

    // Fraction-only carousels have no progress element; keep their timer without an empty GSAP target.
    const progressTargets = sliderThis.find('.progress');
    tl.to(progressTargets.length ? progressTargets : {scaleX: 0}, {
      duration: 5,
      scaleX: 1,
      ease: "Power1.easeInOut",
      onComplete: singleSwiperSliderEnd
    });

    // Reset Progress Bar On Slide Change
    swiperMain.on("slideChange", function () {
      if (!reduced) tl.restart();
      addSwipeVisibleClass();
    });

    // Pause Carousel/Progress Bar On Hover
    sliderThis.find('.swiper-btn-big-wrapper, .swiper-scrollbar').on('mouseenter.unifiReference', function() {
      tl.pause();
    });

    sliderThis.find('.swiper-btn-big-wrapper, .swiper-scrollbar').on('mouseleave.unifiReference', function() {
      if (!reduced) tl.resume();
    });

    // Play/Pause Slider in viewport
    sliderThis.each(function() {
      let triggerElement = $(this);

      ScrollTrigger.create({
        trigger: triggerElement,
        start: '0% 120%',
        end: '100% -20%',
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      });

    });

    function addSwipeVisibleClass() {
      sliderThis.addClass('slider-is-transitioning');
      sliderThis.find('.swiper-slide').addClass('slide-is-transitioning');
      sliderThis.find('.swiper-slide-visible').removeClass('slide-is-transitioning');
      setTimeout(function() {
        sliderThis.removeClass('slider-is-transitioning');
        sliderThis.find('.swiper-slide').removeClass('slide-is-transitioning');
      }, 700);
    }

	});
}

/**
* Scrolltrigger Animations Desktop + Mobile
*/
function initScrolltriggerAnimations() {

  // Script to work with Lottie & Scrolltrigger
  function LottieScrollTrigger(vars) {
    let playhead = {frame: 0},
      target = gsap.utils.toArray(vars.target)[0],
      speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
      st = {trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000"},
      animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path
      });
    for (let p in vars) { // let users override the ScrollTrigger defaults
      st[p] = vars[p];
    }
    animation.addEventListener("DOMLoaded", function() {
      gsap.to(playhead, {
        duration: vars.duration || 0.5,
        delay: vars.delay || 0,
        frame: animation.totalFrames - 1,
        ease: vars.ease || "none",
        onUpdate: () => animation.goToAndStop(playhead.frame, true),
        scrollTrigger: st
      });
      // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    });
    return animation;
  }

  // Scrolltrigger Animation : H1/H2 Title Slide In
  $(".animate-split-lines").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".single-line-inner");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 80%",
        end: "100% 0%",
        toggleActions: "play none none none"
      }
    });
    tl.fromTo(targetElement, 0.8,{
      yPercent: 110
    }, {
      yPercent: 0,
      ease: "Power3.easeOut",
      stagger: .2
    });
  });

  // Scrolltrigger Animation : H4 Typewriter
  $(".animate-typewriter").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".single-char");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 80%",
        end: "100% 0%",
        toggleActions: "play none none none",
        // scrub: .5,
      }
    });
    tl.fromTo(targetElement, 0.01,{
      opacity: 0
    }, {
      opacity: 1,
      ease: "none",
      stagger: .04,
    });
  });

  $('.btn-typewriter').on('mouseenter.unifiReference', function() {
    gsap.fromTo($(this).find(".single-char"), 0.01,{
      opacity: 0
    }, {
      opacity: 1,
      ease: "none",
      stagger: .04,
      clearProps: "opacity"
    });
  });

  // Scrolltrigger Animation : Vertical Lines
  $(".animate-vertical-lines").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".vertical-line");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 80%",
        end: "100% 0%",
        toggleActions: "play none none none"
      }
    });
    tl.fromTo(targetElement, 1.5,{
      scaleY: 0
    }, {
      scaleY: 1,
      ease: "Expo.easeInOut",
      stagger: .05
    });
  });

  // Scrolltrigger Animation : Lottie's
  $(".animate-lottie-gradientbars").each(function (index) {

    var triggerElement = $(this);
    var targetElement = $(this).find(".lottie-window");
    var targetPath = $(this).data('lottie-json');

    LottieScrollTrigger({
      trigger: triggerElement,
      target: targetElement,
      path: "assets/json/" + targetPath + ".json",
      start: "0% 90%",
      end: "100% 0%",
      toggleActions: "play none none none",
      pin: false,
      duration: 2,
      autoplay: true,
    });

  });

    // Scrolltrigger Animation : Lottie's Reverse
  $(".animate-lottie-gradientbars-reverse").each(function (index) {

    var triggerElement = $(this);
    var targetElement = $(this).find(".lottie-window");
    var targetPath = $(this).data('lottie-json');

    LottieScrollTrigger({
      trigger: triggerElement,
      target: targetElement,
      path: "assets/json/" + targetPath + ".json",
      start: "0% 80%",
      end: "100% 0%",
      toggleActions: "play none none reverse",
      pin: false,
      duration: 2,
      autoplay: true,
    });

  });

  // Scrolltrigger Animation : P
  $(".animate-p").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 80%",
        end: "100% 0%",
        toggleActions: "play none none none"
      }
    });
    tl.fromTo(targetElement, .4,{
      opacity: 0,
    }, {
      opacity: 1,
      ease: "none",
      stagger: .1
    });
  });

  // Scrolltrigger Animation : Home Header Cubes
  $(".home-header").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".animate-visual");
    let targetElementMoon = $(this).find(".animate-visual-moon");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 0%",
        end: "100% 0%",
        scrub: .5,
      }
    });
    tl.to(targetElement, 2,{
      yPercent: -35,
      ease: "none"
    });
    tl.to(targetElementMoon, 2,{
      yPercent: -150,
      ease: "none"
    }, "<");
  });

  setTimeout(function() {
    $(".lottie-gridroom svg").attr('preserveAspectRatio', 'none');
  }, 500);

  $(".lottie-gridroom").each(function (index) {

    var triggerElement = $(this);
    var targetElement = $(this).find(".lottie-window");

    var containerHeight = $(targetElement).height();
    var documentHeight = $(window).height();
    var offsetHeight = (documentHeight - containerHeight) / 2;

    LottieScrollTrigger({
      trigger: triggerElement,
      target: targetElement,
      path: "assets/json/grid-room.json",
      pin: false,
      end: "+=75%",
      scrub: 0.5
    });

    LottieScrollTrigger({
      trigger: triggerElement,
      target: $(".lottie-gradientbars-gridroom .lottie-window"),
      path: "assets/json/underline-02.json",
      pin: false,
      start: "+=75%",
      end: "+=100%",
      scrub: 0.5
    });

  });

  // Scrolltrigger Animation : Gridroom
  $(".home-lottie-gridroom").each(function (index) {
    let triggerElement = $(this);
    let targetElementCoverOdd = $(this).find(".animate-cover.horizontal .cover-object");
    let targetElementCoverEven = $(this).find(".animate-cover.vertical .cover-object");

    var containerHeight = $(".lottie-gridroom").height();
    var documentHeight = $(window).height();
    var offsetHeight = (documentHeight - containerHeight) / 2;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        scrub: 0.5,
        pin: true,
        start: "0% " + offsetHeight,
        end: "+=225%",
        onUpdate: self => {
          if(self.progress > 0.33) { h4Animation.play(); } else { h4Animation.reverse(); }
          if(self.progress > 0.33) { h2Animation.play(); } else { h2Animation.reverse(); }
        }
      }
    });

    // No Scrub H4 Animation
    tl.set($(this).find("h4 .single-char"), {
      opacity: 0,
    });

    tl.set($(this).find(".lottie-gradientbars-gridroom"), {
      opacity: 0
    });

    let h4Animation = gsap.timeline({paused: true})
    .fromTo($(this).find("h4 .single-char"), 0.01,{
      opacity: 0
    }, {
      opacity: 1,
      ease: "none",
      stagger: .04
    });

    // No Scrub H2 Animation
    tl.set($(this).find("h2 .single-line-inner"), {
      yPercent: 110
    });

    let h2Animation = gsap.timeline({paused: true})
    .fromTo($(this).find("h2 .single-line-inner"), 0.8,{
      yPercent: 110
    }, {
      yPercent: 0,
      ease: "Power3.easeOut",
      stagger: .2
    });

    // Scrub Animation

    tl.fromTo(targetElementCoverOdd, 0.75,{
      scaleY: 1
    }, {
      scaleY: 0,
      ease: "none"
    }, "<");

    tl.fromTo(targetElementCoverEven, 0.75,{
      scaleX: 1
    }, {
      scaleX: 0,
      ease: "none"
    }, "<");

    tl.fromTo($(this).find(".container .row"), 0.75,{
      scale: .82,
    }, {
      scale: 1,
      ease: "none"
    }, "<");

    tl.set($(this).find(".lottie-gradientbars-gridroom"), {
      opacity: 1
    }, "1");

    tl.fromTo($(this).find("h2 .single-line-inner div"), 0.01,{
      color: "#767270",
    }, {
      color: "#FFFFFF",
      ease: "none",
      stagger: 0.025,
    }, "0.75");

  });

// Scrolltrigger Animation : Timeline Text
$(".home-slider-history .lottie-timeline-text").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: 0.5,
      pin: true,
      start: "0%",
      end: "+=100%",
    }
  });

  tl.fromTo($(this).find("h2 .single-line-inner div"), 0.01,{
    color: "#767270",
  }, {
    color: "#FFFFFF",
    ease: "none",
    stagger: 0.025,
  });

});

// Scrolltrigger Animation : Home Header Cubes
$(".home-hexagon-tiles").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this).find(".animate-visual");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "-25% 100%",
      end: "0% 0%",
      scrub: .5,
    }
  });
  tl.from(targetElement, 2,{
    yPercent: 100,
    stagger: 0.1,
    ease: "Power3.easeOut"
  });
});

// Scrolltrigger Animation : Hexagon Tiles
$(".home-hexagon-tiles").each(function (index) {
  let triggerElement = $(this);

    var containerHeight = $(".home-hexagon-tiles .visuals").height();
    var documentHeight = $(window).height();
    var offsetHeight = (documentHeight - containerHeight) / 2;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        scrub: 0.5,
        pin: true,
        start: "0% " + offsetHeight,
        end: "+=150%",
      }
    });

    tl.set($(this).find(".single-visual .overlay-visual"), {
      opacity: 0
    });

    tl.to($(this), 2.1, {
      opacity: 1,
      ease: "none"
    });

    tl.fromTo($(this).find(".single-visual .overlay-visual"), 0.001,{
      opacity: 0,
    }, {
      opacity: 1,
      ease: "none",
      stagger: .15
    }, "< 0.15");

    tl.fromTo($(this).find(".single-visual .overlay-outline"), 0.001,{
      opacity: 1,
    }, {
      opacity: 0,
      ease: "none",
      stagger: .15
    }, "<");

  });


  // Scrolltrigger Animation : Timeline Text
  $(".home-future .lottie-timeline-text").each(function (index) {
    let triggerElement = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        scrub: 0.5,
        pin: true,
        start: "0%",
        end: "+=100%",
      }
    });

    tl.fromTo($(this).find("h2 .single-line-inner div"), 0.01,{
      color: "#A4A4A4",
    }, {
      color: "#272727",
      ease: "none",
      stagger: 0.025,
    });

  });

  // Scrolltrigger Animation : Partnerships Visuals
  $(".home-partnerships .visuals").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find('.single-visual');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        scrub: 0.5,
        start: "0% 25%",
        end: "75% 0%",
      }
    });

    tl.to(targetElement, {
      scale: 1.075,
      ease: "Power3.easeOut"
    });

  });

  // Scrolltrigger Animation : Home Online
  $(".home-online").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find('.overlay-visual');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        scrub: 0.5,
        start: "0% 70%",
        end: "100% 0%",
      }
    });

    tl.from(targetElement, {
      scale: .8,
      ease: "Power3.easeOut"
    });

    tl.from(targetElement.find("img"), {
      scale: 1.25,
      ease: "Power3.easeOut"
    }, "<");

  });

  // Scrolltrigger Animation : Footer
  $(".footer").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find('.visuals .animate-visual');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        scrub: 0.2,
        start: "0% 100%",
        end: "+=90%"
      }
    });

    tl.from(targetElement, {
      yPercent: 50,
      ease: "none"
    });

  });

}

    try {
      initWindowInnerheight();
      document.documentElement.classList.add(reduced?'unifi-reduced':'unifi-enhanced');
      if (!reduced) {
        smoother = ScrollSmoother.create({smooth:1, effects:true, normalizeScroll:false});
        initSplitText();
      }
      initScrollTo();
      initPlayVideoInview();
      initSwiperSlider();
      if (reduced) {
        tweens.forEach(tween=>tween.pause());
        ScrollTrigger.getAll().filter(trigger=>!ownedTriggers.has(trigger)).forEach(trigger=>trigger.kill());
        document.querySelectorAll('[data-lottie-json]').forEach(el=>{
          const target=el.querySelector('.lottie-window');if(!target)return;
          const animation=lottie.loadAnimation({container:target,renderer:'svg',loop:false,autoplay:false,path:'/assets/json/'+el.dataset.lottieJson+'.json'});
          animation.addEventListener('DOMLoaded',()=>animation.goToAndStop(Math.max(0,animation.totalFrames-1),true));
        });
        document.documentElement.dataset.unifiReady='true';
      } else {
        initLottieHeaderGradientbars=lottie.loadAnimation({container:document.querySelector('.home-header .lottie-window'),renderer:'svg',loop:false,autoplay:false,path:'/assets/json/underline-01.json'});
        initScrolltriggerAnimations();
        initLoader();
        setTimeout(()=>{ScrollTrigger.refresh();document.documentElement.dataset.unifiReady='true';},5200);
      }
    } catch(error) {cleanup();throw error;}
    return cleanup;
  }
};
})();
