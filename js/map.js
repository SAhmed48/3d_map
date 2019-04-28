class MapInitialize  {

    constructor() {
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NDNmYjI1My1iZjM5LTQ3OWMtYWQ2Ni0yYjQxZGVjMDY1ZTMiLCJpZCI6MTAyOTMsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NTYxMTA0NzV9.Ew4X_cVWMbARAMuJyCJhUQ0BmU8fuH9ggkloFVJnhGA';
        this.loaded = false;
        this.viewer = this.loadViewer();
        this.viewer.extend(Cesium.viewerCesiumNavigationMixin, {});
        this.cesiumNavigation = this.viewer.cesiumNavigation;
        this.loadTileSet();
    }

    loadViewer(){
            return new Cesium.Viewer('Container', {
            terrainProvider: Cesium.createWorldTerrain(),
            homeButton: false,
            infoBox: false,
            timeline: false,
            cesiumLogo: false,
            // clockViewModel: false,
            projectionPicker: true,
            navigationHelpButton: false
        });
    }

    loadTileSet(){
        let tileset = this.viewer.scene.primitives.add(
            new Cesium.Cesium3DTileset({
                url: Cesium.IonResource.fromAssetId(21513),
                skipLevelOfDetail : true,
                baseScreenSpaceError : 1024,
                skipScreenSpaceErrorFactor : 16,
                skipLevels : 1,
                immediatelyLoadDesiredLevelOfDetail : false,
                loadSiblings : false,
                cullWithChildrenBounds : true
            })
        );

        this.viewer.zoomTo(tileset);
    }

}