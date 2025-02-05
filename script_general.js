(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"shadow":false,"class":"Player","gap":10,"definitions": [{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20_camera","class":"PanoramaPlayListItem","media":"this.panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"class":"Container","gap":10,"width":110,"overflow":"visible","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"paddingBottom":0,"id":"Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE","paddingRight":0,"paddingLeft":0,"borderRadius":0,"horizontalAlign":"center","verticalAlign":"middle","bottom":"4.6%","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":110,"creationPolicy":"inAdvance","layout":"horizontal","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","minHeight":1,"right":"0%","minWidth":1,"shadow":false,"borderSize":0,"data":{"name":"button menu sup"}},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E_camera","class":"PanoramaPlayListItem","media":"this.panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20_camera","class":"PanoramaPlayListItem","media":"this.panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20"}],"class":"PlayList","id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"class":"Panorama","hfovMin":"120%","partial":false,"id":"panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E","hfov":360,"thumbnailUrl":"media/panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E_t.jpg","label":trans('panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E.label'),"frames":[{"thumbnailUrl":"media/panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":18432,"rowCount":6,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36,"height":3072,"url":"media/panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E_0/{face}/0/{row}_{column}.jpg"},{"width":9216,"rowCount":3,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18,"height":1536,"url":"media/panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"height":1024,"url":"media/panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E_0/{face}/2/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"height":512,"url":"media/panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E_0/{face}/3/{row}_{column}.jpg"},{"width":12288,"rowCount":1,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6,"height":2048,"url":"media/panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"}}],"hfovMax":130,"pitch":0,"vfov":180,"data":{"label":"2"},"adjacentPanoramas":[{"distance":10.11,"yaw":34.08,"panorama":"this.panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20","class":"AdjacentPanorama","data":{"overlayID":"overlay_DB90FB97_D543_B217_41E0_B7FDB20014A0"},"select":"this.overlay_DB90FB97_D543_B217_41E0_B7FDB20014A0.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":17.36},{"distance":12.87,"yaw":-33.56,"panorama":"this.panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20","class":"AdjacentPanorama","data":{"overlayID":"overlay_C55EDCBF_D55D_50A9_41C8_2CC182DF0BCD"},"select":"this.overlay_C55EDCBF_D55D_50A9_41C8_2CC182DF0BCD.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":17.36}],"overlays":["this.overlay_DB90FB97_D543_B217_41E0_B7FDB20014A0","this.overlay_C55EDCBF_D55D_50A9_41C8_2CC182DF0BCD"]},{"class":"Panorama","hfovMin":"120%","partial":false,"id":"panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20","hfov":360,"thumbnailUrl":"media/panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20_t.jpg","label":trans('panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20.label'),"frames":[{"thumbnailUrl":"media/panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":18432,"rowCount":6,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":36,"height":3072,"url":"media/panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20_0/{face}/0/{row}_{column}.jpg"},{"width":9216,"rowCount":3,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18,"height":1536,"url":"media/panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"height":1024,"url":"media/panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20_0/{face}/2/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"height":512,"url":"media/panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20_0/{face}/3/{row}_{column}.jpg"},{"width":12288,"rowCount":1,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6,"height":2048,"url":"media/panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"}}],"hfovMax":130,"pitch":0,"vfov":180,"data":{"label":"3"},"adjacentPanoramas":[{"distance":12.82,"yaw":17.36,"panorama":"this.panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E","class":"AdjacentPanorama","data":{"overlayID":"overlay_D849C1C3_D542_CE60_4187_DDC821B26919"},"select":"this.overlay_D849C1C3_D542_CE60_4187_DDC821B26919.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":34.08}],"overlays":["this.overlay_D849C1C3_D542_CE60_4187_DDC821B26919"]},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_DC98FF79_D547_523F_41E0_B4AD3D5A6A20_camera"},{"shadow":false,"class":"Container","gap":10,"width":85,"overflow":"scroll","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"children":["this.Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE"],"paddingBottom":0,"id":"Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","paddingRight":0,"paddingLeft":0,"borderRadius":0,"horizontalAlign":"left","top":"17.26%","verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":430,"creationPolicy":"inAdvance","layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":430,"maxWidth":85,"minHeight":430,"right":"1.22%","minWidth":85,"borderSize":0,"data":{"name":"--SETTINGS"}},{"shadow":false,"class":"Image","width":80,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"left","paddingBottom":0,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","paddingRight":0,"paddingLeft":0,"borderRadius":0,"top":21.17,"verticalAlign":"top","toolTipHorizontalAlign":"center","height":85,"click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"left":26.3,"maxWidth":80,"minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"borderSize":0,"scaleMode":"fill"},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_DF13455E_D547_5677_41DE_FE3F2AE8820E_camera"},{"displayPlaybackBar":true,"surfaceSelectionEnabled":false,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","gyroscopeEnabled":true,"id":"MainViewerPanoramaPlayer"},{"playbackBarRight":0,"class":"ViewerArea","data":{"name":"Main Viewer"},"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#AAAAAA","toolTipBorderRadius":3,"toolTipShadowSpread":0,"toolTipShadowOpacity":1,"shadow":false,"playbackBarBorderSize":2,"playbackBarBorderRadius":4,"playbackBarHeadBackgroundColorDirection":"vertical","id":"MainViewer","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","paddingRight":0,"progressBackgroundColorRatios":[0,1],"paddingLeft":0,"toolTipBackgroundColor":"#999999","playbackBarHeadBorderSize":0,"toolTipFontSize":12,"playbackBarHeight":20,"subtitlesTextShadowVerticalLength":1,"toolTipTextShadowColor":"#666666","progressOpacity":1,"toolTipShadowVerticalLength":0,"progressRight":10,"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarHeadWidth":6,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarBottom":10,"progressBackgroundOpacity":1,"toolTipFontStyle":"normal","subtitlesTop":0,"displayTooltipInTouchScreens":true,"subtitlesPaddingTop":5,"progressBorderColor":"#AAAAAA","playbackBarProgressBorderSize":0,"playbackBarProgressBackgroundColor":["#222222","#444444"],"toolTipPaddingLeft":6,"subtitlesTextShadowHorizontalLength":1,"subtitlesBackgroundOpacity":0.2,"toolTipFontWeight":"normal","subtitlesPaddingBottom":5,"progressBarBackgroundColor":["#222222","#444444"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"subtitlesBorderColor":"#FFFFFF","progressBarOpacity":1,"progressBottom":1,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeadBorderRadius":0,"vrPointerSelectionColor":"#FF0000","playbackBarBackgroundOpacity":1,"subtitlesBottom":50,"progressHeight":20,"minHeight":50,"toolTipPaddingRight":6,"progressBorderSize":2,"subtitlesPaddingLeft":5,"minWidth":100,"subtitlesFontFamily":"Arial","borderSize":0,"toolTipShadowHorizontalLength":0,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowColor":"#000000","toolTipTextShadowBlurRadius":3,"subtitlesTextShadowOpacity":1,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowBlurRadius":3,"firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":4,"subtitlesFontColor":"#FFFFFF","transitionDuration":500,"progressBorderRadius":4,"playbackBarHeadShadowOpacity":0.7,"vrPointerSelectionTime":1500,"toolTipPaddingBottom":4,"borderRadius":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":30,"playbackBarProgressBackgroundColorRatios":[0,1],"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarProgressBackgroundColorDirection":"vertical","bottom":0,"subtitlesHorizontalAlign":"center","top":0,"surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesOpacity":1,"progressLeft":10,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesPaddingRight":5,"subtitlesFontWeight":"normal","surfaceReticleSelectionOpacity":1,"playbackBarOpacity":1,"subtitlesVerticalAlign":"bottom","toolTipBorderSize":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"playbackBarHeadBorderColor":"#000000","subtitlesGap":0,"subtitlesShadow":false,"subtitlesBorderSize":0,"toolTipOpacity":0.5,"playbackBarBackgroundColorDirection":"vertical","subtitlesEnabled":true,"displayTooltipInSurfaceSelection":true,"left":0,"playbackBarLeft":0,"toolTipShadowBlurRadius":3,"vrPointerColor":"#FFFFFF","right":0,"playbackBarHeadBackgroundColor":["#111111","#666666"]},{"minWidth":20,"gap":10,"class":"ThumbnailList","right":"0.12%","itemThumbnailShadowHorizontalLength":3,"itemThumbnailShadowBlurRadius":8,"itemThumbnailShadowVerticalLength":3,"itemMode":"normal","itemLabelFontFamily":"Arial","itemLabelHorizontalAlign":"center","paddingTop":10,"backgroundOpacity":0,"scrollBarMargin":2,"itemBorderRadius":0,"itemLabelFontColor":"#FFFFFF","propagateClick":false,"paddingBottom":10,"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","itemBackgroundColor":[],"itemPaddingRight":3,"itemVerticalAlign":"middle","paddingRight":20,"paddingLeft":20,"borderRadius":5,"horizontalAlign":"left","itemLabelFontWeight":"normal","itemThumbnailWidth":75,"itemThumbnailBorderRadius":50,"bottom":"0.02%","itemOpacity":1,"itemThumbnailScaleMode":"fit_outside","scrollBarOpacity":0.5,"itemThumbnailShadow":true,"verticalAlign":"top","playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","toolTipHorizontalAlign":"center","height":135.02,"itemBackgroundColorDirection":"vertical","itemLabelFontSize":14,"itemPaddingLeft":3,"itemBackgroundOpacity":0,"itemPaddingTop":3,"selectedItemLabelFontColor":"#FFCC00","scrollBarVisible":"rollOver","scrollBarWidth":10,"itemHorizontalAlign":"center","layout":"horizontal","itemThumbnailShadowColor":"#000000","scrollBarColor":"#FFFFFF","itemBackgroundColorRatios":[],"rollOverItemBackgroundOpacity":0,"itemThumbnailShadowSpread":1,"itemThumbnailOpacity":1,"selectedItemLabelFontWeight":"bold","itemLabelPosition":"bottom","left":"0.01%","itemLabelGap":9,"itemLabelFontStyle":"normal","itemThumbnailShadowOpacity":0.54,"minHeight":20,"data":{"name":"ThumbnailList35762"},"itemThumbnailHeight":75,"shadow":false,"itemPaddingBottom":3,"borderSize":0,"rollOverItemLabelFontWeight":"normal","itemLabelTextDecoration":"none"},{"shadow":false,"class":"Label","textDecoration":"none","width":300,"paddingTop":0,"propagateClick":false,"backgroundOpacity":0,"horizontalAlign":"right","paddingBottom":0,"id":"label4056","fontFamily":"Arial","paddingRight":0,"paddingLeft":0,"borderRadius":0,"top":17,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":50,"text":trans('label4056.text'),"fontColor":"#FFFFFF","maxHeight":50,"fontSize":30,"maxWidth":500,"fontStyle":"normal","minHeight":50,"right":"1.45%","minWidth":500,"fontWeight":"bold","borderSize":0,"data":{"name":"Label28174"}},{"shadow":false,"class":"Container","gap":3,"width":85,"overflow":"scroll","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"paddingBottom":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","paddingRight":0,"paddingLeft":0,"borderRadius":0,"horizontalAlign":"center","top":"14%","verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","height":320,"creationPolicy":"inAdvance","layout":"vertical","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":320,"maxWidth":85,"minHeight":320,"right":"0%","minWidth":85,"borderSize":0,"data":{"name":"-button set"}},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_DB996B9A_D543_B219_41B6_18DDE9873C8B"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_C1E59888_D5CF_F0B6_41E1_565070A3C049","distance":100,"yaw":34.08,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","vfov":9.45,"data":{"label":"Arrow 01"},"verticalAlign":"middle","pitch":-9.53,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"Arrow 01","hasPanoramaAction":true},"id":"overlay_DB90FB97_D543_B217_41E0_B7FDB20014A0"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_C54F2CD2_D55D_50FB_41E3_7E616D557D06"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_C1E5B888_D5CF_F0B6_41E2_034975AAD159","distance":100,"yaw":-33.56,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","vfov":9.45,"data":{"label":"Arrow 01"},"verticalAlign":"middle","pitch":-7.51,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"Arrow 01","hasPanoramaAction":true},"id":"overlay_C55EDCBF_D55D_50A9_41C8_2CC182DF0BCD"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_D828F1F1_D542_CE20_41DB_757D2768BFC6"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_C1E47888_D5CF_F0B6_41E6_E9506F75F037","distance":100,"yaw":17.36,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","vfov":9.45,"data":{"label":"Arrow 01"},"verticalAlign":"middle","pitch":-7.55,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"Arrow 01","hasPanoramaAction":true},"id":"overlay_D849C1C3_D542_CE60_4187_DDC821B26919"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_DB996B9A_D543_B219_41B6_18DDE9873C8B"},{"rowCount":3,"frameDuration":62,"class":"AnimatedImageResource","colCount":3,"frameCount":9,"levels":[{"height":270,"width":300,"url":"media/res_DA02D158_D545_CE89_41E3_98AC43DA5243_0.png","class":"ImageResourceLevel"}],"id":"AnimatedImageResource_C1E59888_D5CF_F0B6_41E1_565070A3C049"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C54F2CD2_D55D_50FB_41E3_7E616D557D06"},{"rowCount":3,"frameDuration":62,"class":"AnimatedImageResource","colCount":3,"frameCount":9,"levels":[{"height":270,"width":300,"url":"media/res_DA02D158_D545_CE89_41E3_98AC43DA5243_0.png","class":"ImageResourceLevel"}],"id":"AnimatedImageResource_C1E5B888_D5CF_F0B6_41E2_034975AAD159"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_D828F1F1_D542_CE20_41DB_757D2768BFC6"},{"rowCount":3,"frameDuration":62,"class":"AnimatedImageResource","colCount":3,"frameCount":9,"levels":[{"height":270,"width":300,"url":"media/res_DA02D158_D545_CE89_41E3_98AC43DA5243_0.png","class":"ImageResourceLevel"}],"id":"AnimatedImageResource_C1E47888_D5CF_F0B6_41E6_E9506F75F037"}],"width":"100%","mediaActivationMode":"window","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"scrollBarMargin":2,"paddingBottom":0,"id":"rootPlayer","overflow":"hidden","scripts":{"showPopupMedia":TDV.Tour.Script.showPopupMedia,"translate":TDV.Tour.Script.translate,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"downloadFile":TDV.Tour.Script.downloadFile,"shareSocial":TDV.Tour.Script.shareSocial,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizStart":TDV.Tour.Script.quizStart,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizFinish":TDV.Tour.Script.quizFinish,"getKey":TDV.Tour.Script.getKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getOverlays":TDV.Tour.Script.getOverlays,"clone":TDV.Tour.Script.clone,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"openLink":TDV.Tour.Script.openLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupImage":TDV.Tour.Script.showPopupImage,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"init":TDV.Tour.Script.init,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"historyGoForward":TDV.Tour.Script.historyGoForward,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"playAudioList":TDV.Tour.Script.playAudioList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMapLocation":TDV.Tour.Script.setMapLocation,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showWindow":TDV.Tour.Script.showWindow,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"isPanorama":TDV.Tour.Script.isPanorama,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"textToSpeech":TDV.Tour.Script.textToSpeech,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"initQuiz":TDV.Tour.Script.initQuiz,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"cloneCamera":TDV.Tour.Script.cloneCamera,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"mixObject":TDV.Tour.Script.mixObject,"existsKey":TDV.Tour.Script.existsKey,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPixels":TDV.Tour.Script.getPixels,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"setLocale":TDV.Tour.Script.setLocale,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setValue":TDV.Tour.Script.setValue,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"registerKey":TDV.Tour.Script.registerKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMediaByTags":TDV.Tour.Script.getMediaByTags},"paddingRight":0,"paddingLeft":0,"borderRadius":0,"horizontalAlign":"left","vrPolyfillScale":1,"verticalAlign":"top","mouseWheelEnabled":true,"contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#000000"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","creationPolicy":"inAdvance","backgroundPreloadEnabled":true,"defaultVRPointer":"gaze","downloadEnabled":false,"minHeight":20,"data":{"initialScale":0.65,"name":"Player28156","textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1,"stopBackgroundAudio":false,"rate":1},"locales":{"fr":"locale/fr.txt"},"defaultLocale":"fr"},"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist])","backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Wed Feb 5 2025