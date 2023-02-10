"use strict";(self.webpackChunkhub_admin=self.webpackChunkhub_admin||[]).push([[503],{51503:(fe,x,a)=>{a.r(x),a.d(x,{LiveShellModule:()=>ae,routes:()=>k});var d=a(36895),p=a(62510),I=a(33165),h=a(68745),Z=a(50590),v=a(54004),S=a(31774),j=a(82621),m=a(61135),P=a(95721),E=a(81042),F=a(1336),L=a(69638),_=a(60873),e=a(94650);let b=(()=>{class o{constructor(t,i,s){this.websocketService=t,this.providersService=i,this.fenceEventFacade=s,this.subs=new h.Y,this.count={},this._locationFeatureList=[],this.locationFeatureListSubject=new m.X([]),this.locationFeatureList$=this.locationFeatureListSubject.asObservable(),this.createColor(),this.subs.add(this.getLocationsGeoJson().subscribe(n=>{this.updateLocations(n.features)}),this.websocketService.locationUpdatesGeoJsonSubject.subscribe(n=>{"message"===n.event&&this.updateLocations(n.payload.features)}),this.fenceEventFacade.action$.subscribe(n=>{this.updateLocationFromFenceEvent(n)}))}get locationFeatureList(){return this._locationFeatureList}set locationFeatureList(t){t!==this._locationFeatureList&&(t?(this.count={},this._locationFeatureList=this.createLocations(t)):this._locationFeatureList=[],this.locationFeatureListSubject.next(this.locationFeatureList))}getLocationsGeoJson(){return this.providersService.$getProviderLocations({geojson:"true"})}ngOnDestroy(){this.subs.unsubscribe()}getLocationByProviderId(t){if(!this.locationFeatureList)return null;let i;const s=this.locationFeatureList,n=s.length;for(i=0;i<n;i++)if(s[i].properties.provider_id===t)return s[i];return null}getLocationCoordinatesByProviderId(t){const i=this.getLocationByProviderId(t);return i?i.geometry.coordinates:null}updateLocationFromFenceEvent(t){const i=this.getLocationByProviderId(t.item.providerId);let s=!1;i&&("add"===t.type?(i.properties.fenceEvent=t.item.eventType,s=!0):"delete"===t.type&&!t.isProviderInActionList&&(delete i.properties.fenceEvent,s=!0)),s&&this.locationFeatureListSubject.next([...this.locationFeatureList])}updateLocations(t){let i=0;const s=t.length;for(;i<s;i++){const n=t[i],c=this.getLocationByProviderId(n.properties.provider_id);c?c.properties.timestamp_generated<=n.properties.timestamp_generated&&(c.properties={...c.properties,...n.properties},c.properties.provider_type||(c.properties.provider_type="uwb"),c.geometry=n.geometry):this.locationFeatureList.push(this.createLocation(n))}return this.locationFeatureListSubject.next([...this.locationFeatureList]),this.locationFeatureList}createLocation(t){return t.id=(0,E.Z)(),t.properties.provider_type||(t.properties.provider_type="uwb"),t.properties.id=t.properties.provider_id,t.properties.objType="provider",t.properties.color=this.getColor(t.properties.provider_type),t}createLocations(t){let i;const s=t.length;for(i=0;i<s;i++)t[i]=this.createLocation(t[i]);return t}createColor(){this.color={};const t=Object.keys(_.lQ),i=t.length;for(let s=0;s<i;s++){const n=t[s];this.color[n]=[];const c=new P.Color(_.lQ[n]);for(let u=0;u<5;u++){let l=c.lighten(.02*u).rgba;this.color[n].includes(l)||this.color[n].push(l),l=c.darken(.02*u).rgba,this.color[n].includes(l)||this.color[n].push(l)}}}getColor(t){let i=this.count[t]=this.count[t]||0;if(!this.color[t])throw new Error(`type [${t}] in colors for locations`);return i%=this.color[t].length,this.count[t]++,this.color[t][i]}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(F.jb),e.LFG(F.j7),e.LFG(L.SU))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var y=a(77344);let B=(()=>{class o{constructor(t){this.locationFacade=t,this.subs=new h.Y,this._courseFeatureList=[],this.courseFeatureListSubject=new m.X([]),this.courseFeatureList$=this.courseFeatureListSubject.asObservable(),this.subs.add(this.locationFacade.locationFeatureList$.subscribe(i=>{this.courseFeatureList=y.UZ.courseLineAndArrowFromFeature(i,!0)}))}get courseFeatureList(){return this._courseFeatureList}set courseFeatureList(t){t!==this._courseFeatureList&&(this._courseFeatureList=t||[],this.courseFeatureListSubject.next(this.courseFeatureList))}ngOnDestroy(){this.subs.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(b))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var A=a(76139),C=a(80612),U=a(27002),T=a(44449),$=a(73912);let Y=(()=>{class o{constructor(t){this.deepHubWebsocketService=t}get collisionUpdatesSubject(){return this.deepHubWebsocketService.collisionUpdatesSubject}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(F.jb))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),M=(()=>{class o{constructor(t){this.collisionEventsService=t,this.subs=new h.Y,this.maxLength=1e4,this.eventList=[],this.eventsListSubject=new m.X([]),this.eventsList$=this.eventsListSubject.asObservable(),this._collisionsFeatureList=[],this.collisionsFeatureListSubject=new m.X([]),this.collisionsFeatureList$=this.collisionsFeatureListSubject.asObservable(),this.subs.add(this.collisionEventsService.collisionUpdatesSubject.subscribe(i=>{"message"===i.event&&this.addCollisions(i.payload)}))}ngOnDestroy(){this.subs.unsubscribe()}addCollisions(t){if(t){const i=t.length;for(let s=0;s<i;s++){const n=t[s],c=n.collisions,u=c.length;for(let l=0;l<u;l++)n.collision_type===y.v2.CollisionStart?this.addCollision(c[l]):n.collision_type===y.v2.CollisionEnd?this.removeCollision(c[l]):this.updateCollision(c[l]);this.eventList.push(n),this.eventList.length>=this.maxLength&&this.eventList.shift()}i&&(this.eventList=[...this.eventList],this.eventsListSubject.next(this.eventList))}}addCollision(t){const i={type:"Feature",geometry:t.geometry?t.geometry:t.position,properties:{objType:"collision",collision:!0,...void 0!==t.floor?{floor:t.floor}:{}}};this._collisionsFeatureList.push(i)}removeCollision(t){const i=this.getCollisionById(t.id);if(!i)return;const s=this._collisionsFeatureList,n=s.indexOf(i);n>-1&&(s.splice(n,1),this.triggerUpdate())}updateCollision(t){const i=this.getCollisionById(t.id);i?(void 0!==t.floor&&(i.properties.floor=t.floor),i.geometry=t.geometry?t.geometry:t.position,this.triggerUpdate()):this.addCollision(t)}getCollisionById(t){const i=this._collisionsFeatureList,s=i.length;let n=0;for(;n<s;n++)if(i[n].id===t)return i[n];return null}triggerUpdate(){this._collisionsFeatureList=[...this._collisionsFeatureList],this.collisionsFeatureListSubject.next(this._collisionsFeatureList)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(Y))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var N=a(17009);let z=(()=>{class o{constructor(t,i,s,n,c,u,l,ce,le,ue,de,pe,he,ve,me){this.router=t,this.activatedRoute=i,this.mapOneFacade=s,this.mapFacade=n,this.fenceFacade=c,this.zoneFacade=u,this.searchBarFacade=l,this.filterFacade=ce,this.courseFacade=le,this.locationFacade=ue,this.collisionEventsFacade=de,this.trackableMotionsFacade=pe,this.fenceEventsFacade=he,this.snackBar=ve,this.mapZoomFacade=me,this.subs=new h.Y,this.pushAlert=!0,this.durationInSeconds=1}ngOnInit(){this.mapOneFacade.showRightSidebar=!1,this.mapOneFacade.activSaveLeftSidebar=!0,this.mapFacade.setShowFilterButton=!0,this.router.navigateByUrl(this.router.createUrlTree(["/map/system/live",{outlets:{left:["list"],right:null}}],{queryParams:{code:null,scope:null,state:null,session_state:null},relativeTo:this.activatedRoute,queryParamsHandling:"merge",preserveFragment:!0})),this.searchBarFacade.featureList$=this.filterFacade.filterDataList$,this.searchBarFacade.title="Search Locations, Trackables, Fences, Zones, Location providers",this.searchBarFacade.isFilterActiv=this.filterFacade.hasActiveFilter$,this.mapFacade.bgFeature=[this.filterFacade.filterDataList$],this.mapFacade.features=[],this.filterFacade.setDataForFilter([this.courseFacade.courseFeatureList$,this.locationFacade.locationFeatureList$,this.fenceFacade.fencesFeatureWithUpdatesList$,this.fenceFacade.fencesLabelFeatureList$,this.zoneFacade.zonesFeatureList$,this.zoneFacade.zonesLabelFeatureList$,this.trackableMotionsFacade.trackableMotionsFeatureList$,this.collisionEventsFacade.collisionsFeatureList$]),this.subs.add(this.activatedRoute.queryParams.pipe((0,Z.P)()).subscribe(t=>{Object.keys(t).length||(this.mapZoomFacade.bgFeaturesZoom=!0)}),this.mapOneFacade.showLeftSidebar$.subscribe(t=>{this.pushAlert=t}),this.fenceEventsFacade.fenceEvent$.pipe((0,v.U)(t=>{const i=this.fenceFacade.getFeatureByFenceId(t.fenceId);return t.fenceName=i?.properties?.name,t})).subscribe(t=>{if(this.pushAlert){let i;"provider"===t.object_type?i=`${t.providerId}\n${t.fenceName}\n${t.eventType}`:"trackable"===t.object_type&&(i=`${t.trackableId}\n${t.fenceName}\n${t.eventType}`),this.snackBar.open(i,null,{duration:1e3*this.durationInSeconds,panelClass:["fence-event-snackbar"]})}}),this.filterFacade.filterUIList$.subscribe(()=>{this.filterFacade.hasActiveFilter()?this.mapFacade.setFilterButtonStatus(!0):this.mapFacade.setFilterButtonStatus(!1)}))}ngOnDestroy(){this.subs.unsubscribe(),this.searchBarFacade.isFilterActiv=null}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.F0),e.Y36(p.gz),e.Y36(A.$),e.Y36(C.yk),e.Y36(S.l),e.Y36($.Xq),e.Y36(U.w),e.Y36(j.s_),e.Y36(B),e.Y36(b),e.Y36(M),e.Y36(T.A),e.Y36(L.SU),e.Y36(N.ux),e.Y36(C.tI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["deephub-live-show"]],decls:0,vars:0,template:function(t,i){},encapsulation:2,changeDetection:0}),o})(),J=(()=>{class o{constructor(t,i){this.router=t,this.activatedRoute=i}ngOnInit(){this.router.navigateByUrl(this.router.createUrlTree(["/map/system/live",{outlets:{primary:["show"],left:["list"]}}],{queryParams:{code:null,scope:null,state:null,session_state:null},relativeTo:this.activatedRoute,queryParamsHandling:"merge",preserveFragment:!0}))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.F0),e.Y36(p.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,i){},encapsulation:2}),o})();var O=a(24006),f=a(1576),w=a(48262);let R=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,f.ae,O.u5,O.UX,I.$,w.Lr]}),o})();var Q=a(67234),D=a.n(Q),G=a(66659),H=a(44850),g=a(3848);function X(o,r){1&o&&(e.TgZ(0,"span"),e._uU(1,"Fence"),e.qZA()),2&o&&e.uIk("data-cy","live-tab-fence")}function K(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"p",13)(1,"span",14),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,n=e.oxw(2);return e.KtG(n.moveToByProviderId(s.providerId))}),e._uU(2),e.qZA(),e._UZ(3,"br"),e._uU(4),e.TgZ(5,"span",14),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,n=e.oxw(2);return e.KtG(n.moveToByFenceId(s.fenceId))}),e._uU(6),e.qZA()()}if(2&o){const t=e.oxw().$implicit;e.xp6(2),e.hij(" ",t.providerId,""),e.xp6(2),e.hij(" ",t.eventType," "),e.xp6(2),e.Oqu(t.fenceName)}}function W(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"p",13)(1,"span",14),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,n=e.oxw(2);return e.KtG(n.moveToByTrackableMotionId(s.trackableId))}),e._uU(2),e.qZA(),e._UZ(3,"br"),e._uU(4),e.TgZ(5,"span",14),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,n=e.oxw(2);return e.KtG(n.moveToByFenceId(s.fenceId))}),e._uU(6),e.qZA()()}if(2&o){const t=e.oxw().$implicit;e.xp6(2),e.hij(" ",t.trackableId,""),e.xp6(2),e.hij(" ",t.eventType," "),e.xp6(2),e.Oqu(t.fenceName)}}function q(o,r){if(1&o&&(e.ynx(0),e.TgZ(1,"div",8)(2,"div",9)(3,"div",10)(4,"p",11),e._uU(5),e.qZA(),e.YNc(6,K,7,3,"p",12),e.YNc(7,W,7,3,"p",12),e.qZA()()(),e.BQk()),2&o){const t=r.$implicit,i=r.index;e.xp6(1),e.Q6J("ngClass","bg_eventType_"+t.eventType+" bl_object_type_"+t.object_type),e.uIk("data-cy","live-fence-list-item-"+i),e.xp6(4),e.Oqu(t.timeFormat),e.xp6(1),e.Q6J("ngIf","provider"===t.object_type),e.xp6(1),e.Q6J("ngIf","trackable"===t.object_type)}}function V(o,r){if(1&o&&(e.TgZ(0,"virtual-scroller",5,6),e.ALo(2,"async"),e.YNc(3,q,8,5,"ng-container",7),e.qZA()),2&o){const t=e.MAs(1),i=e.oxw();e.Q6J("items",e.lcZ(2,3,i.getListFence())),e.xp6(3),e.Q6J("ngForOf",t.viewPortItems)("ngForTrackBy",i.fenceEventTrackByFunction)}}function ee(o,r){1&o&&(e.TgZ(0,"span"),e._uU(1,"Trackable"),e.qZA()),2&o&&e.uIk("data-cy","live-tab-trackable")}function te(o,r){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",15)(2,"div",9)(3,"div",10)(4,"p",11),e._uU(5),e.qZA(),e.TgZ(6,"p",13)(7,"span",14),e.NdJ("click",function(){const n=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.moveToByProviderId(n.location.provider_id))}),e._uU(8),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"span"),e._uU(11),e.qZA()()()()(),e.BQk()}if(2&o){const t=r.$implicit,i=r.index,s=e.oxw(2);e.xp6(1),e.Q6J("ngStyle",s.getListStyle(t.location.provider_type)),e.uIk("data-cy","live-trackable-list-item-"+i),e.xp6(4),e.Oqu(t.timeFormat),e.xp6(3),e.hij(" ",t.location.provider_id,""),e.xp6(3),e.Oqu(t.location.provider_type)}}function ie(o,r){if(1&o&&(e.TgZ(0,"virtual-scroller",5,6),e.ALo(2,"async"),e.YNc(3,te,12,5,"ng-container",7),e.qZA()),2&o){const t=e.MAs(1),i=e.oxw();e.Q6J("items",e.lcZ(2,3,i.getListTrackableMotion())),e.xp6(3),e.Q6J("ngForOf",t.viewPortItems)("ngForTrackBy",i.fenceEventTrackByFunction)}}function oe(o,r){1&o&&(e.TgZ(0,"span"),e._uU(1,"Collision"),e.qZA()),2&o&&e.uIk("data-cy","live-tab-collision")}function ne(o,r){if(1&o&&(e.ynx(0),e.TgZ(1,"div",8)(2,"div",9)(3,"div",10)(4,"p",11),e._uU(5),e.qZA(),e.TgZ(6,"p",13)(7,"span"),e._uU(8),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"span"),e._uU(11),e.qZA()()()()(),e.BQk()),2&o){const t=r.$implicit,i=r.index;e.xp6(1),e.Q6J("ngClass","color_eventType_"+t.collision_type+" bl_object_type_"+t.object_type),e.uIk("data-cy","live-collision-list-item-"+i),e.xp6(4),e.hij(" ",t.collision_time||t.start_time," "),e.xp6(3),e.hij(" ",t.id,""),e.xp6(3),e.Oqu(t.collision_type)}}function se(o,r){if(1&o&&(e.TgZ(0,"virtual-scroller",5,6),e.ALo(2,"async"),e.YNc(3,ne,12,5,"ng-container",7),e.qZA()),2&o){const t=e.MAs(1),i=e.oxw();e.Q6J("items",e.lcZ(2,3,i.getListCollision())),e.xp6(3),e.Q6J("ngForOf",t.viewPortItems)("ngForTrackBy",i.fenceEventTrackByFunction)}}const k=[{path:"",component:J},{path:"show",component:z},{path:"list",component:(()=>{class o{constructor(t,i,s,n,c,u,l){this.fenceEventsFacade=i,this.trackableMotionsFacade=s,this.mapFacade=n,this.locationFacade=c,this.fenceFacade=u,this.collisionEventsFacade=l,(window.Cypress||t)&&(window.LiveSideListComponent=this)}getListFence(){return this.fenceEventsFacade.eventsList$.pipe((0,v.U)(t=>t.sort((i,s)=>s.timestampSent-i.timestampSent)))}moveTo(t){this.mapFacade.flyTo({center:t,essential:!0,zoom:16})}moveToByProviderId(t){const i=this.locationFacade.getLocationCoordinatesByProviderId(t);i&&this.moveTo(i)}moveToByFenceId(t){const i=this.fenceFacade.getFeatureByFenceId(t);i&&this.moveTo("Point"===i.geometry.type?i.geometry.coordinates:D()(i.geometry.coordinates,1))}moveToByTrackableMotionId(t){const i=this.trackableMotionsFacade.getFeatureByTrackableMotionId(t);i&&this.moveTo(i.location.position.coordinates)}getListTrackableMotion(){return this.trackableMotionsFacade.eventsList$.pipe((0,v.U)(t=>t.sort((i,s)=>s.time-i.time)))}getListCollision(){return this.collisionEventsFacade.eventsList$.pipe((0,v.U)(t=>t.sort((i,s)=>{const n=i.end_time||i.collision_time||i.start_time,c=s.end_time||s.collision_time||s.start_time;return c<n?-1:c>n?1:0})))}fenceEventTrackByFunction(t,i){return i.timestampSent+i.eventType+i.providerId}getListStyle(t){return{"border-left":`10px solid ${_.LN[t]}`}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(G.BY),e.Y36(L.SU),e.Y36(T.A),e.Y36(C.yk),e.Y36(b),e.Y36(S.l),e.Y36(M))},o.\u0275cmp=e.Xpm({type:o,selectors:[["deephub-live-side-list"]],decls:14,vars:0,consts:[["fxLayout","column","fxLayoutAlign","space-between none",1,"zone-list",2,"height","100%"],["fxFlex","none"],["fxFlex","",1,"full_height","min_tabs"],["mat-tab-label",""],["matTabContent",""],[1,"fenceEvent",3,"items"],["scroll",""],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"fenceEvent-item",3,"ngClass"],[1,"fenceEvent-item-content"],[1,"item-text"],[1,"time","event-line"],["class","event-line",4,"ngIf"],[1,"event-line"],[3,"click"],[1,"fenceEvent-item",3,"ngStyle"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Event list"),e.qZA(),e._UZ(3,"mat-divider"),e.TgZ(4,"mat-tab-group",2)(5,"mat-tab"),e.YNc(6,X,2,1,"ng-template",3),e.YNc(7,V,4,5,"ng-template",4),e.qZA(),e.TgZ(8,"mat-tab"),e.YNc(9,ee,2,1,"ng-template",3),e.YNc(10,ie,4,5,"ng-template",4),e.qZA(),e.TgZ(11,"mat-tab"),e.YNc(12,oe,2,1,"ng-template",3),e.YNc(13,se,4,5,"ng-template",4),e.qZA()()())},dependencies:[d.mk,d.sg,d.O5,d.PC,f.xw,f.Wh,f.yH,H.d,g.SP,g.uD,g.uX,g.Vc,w.Vw,d.Ov],styles:[".zone-list[_ngcontent-%COMP%]{overflow:auto}.color_eventType_collision_end[_ngcontent-%COMP%], .bg_eventType_region_exit[_ngcontent-%COMP%]{background-color:#e4200e1a}.color_eventType_colliding[_ngcontent-%COMP%], .color_eventType_collision_start[_ngcontent-%COMP%], .bg_eventType_region_entry[_ngcontent-%COMP%]{background-color:#afca051a}.bl_object_type_trackable[_ngcontent-%COMP%]{border-left:10px solid #088}.bl_object_type_provider[_ngcontent-%COMP%]{border-left:10px solid #5382bf}h3[_ngcontent-%COMP%]{padding:16px;margin:0}.fenceEvent[_ngcontent-%COMP%]{height:100%}.fenceEvent[_ngcontent-%COMP%]   .fenceEvent-item[_ngcontent-%COMP%]{height:72px}.fenceEvent[_ngcontent-%COMP%]   .fenceEvent-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:normal;color:#878787}.fenceEvent[_ngcontent-%COMP%]   .fenceEvent-item[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:8px}.fenceEvent[_ngcontent-%COMP%]   .fenceEvent-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6b7f92;cursor:pointer}.fenceEvent[_ngcontent-%COMP%]   .fenceEvent-item-content[_ngcontent-%COMP%]{display:flex;padding:0 16px;flex-direction:row;align-items:center;box-sizing:border-box;position:relative;height:inherit}.fenceEvent[_ngcontent-%COMP%]   .item-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.fenceEvent[_ngcontent-%COMP%]   .item-text[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0;padding:0;font-weight:400}.event-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}  .fence-event-snackbar{white-space:pre-wrap}  .fence-event-snackbar .mat-simple-snackbar{text-align:center}  .fence-event-snackbar .mat-simple-snackbar span{display:block;width:100%}"],changeDetection:0}),o})(),outlet:"left"}];let ae=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,p.Bz.forChild(k),R]}),o})()}}]);