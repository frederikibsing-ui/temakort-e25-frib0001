var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Folkeskoler_1 = new ol.format.GeoJSON();
var features_Folkeskoler_1 = format_Folkeskoler_1.readFeatures(json_Folkeskoler_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_1.addFeatures(features_Folkeskoler_1);
var lyr_Folkeskoler_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_1, 
                style: style_Folkeskoler_1,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_1.png" /> Folkeskoler'
            });
var format_HvidovreHospital_2 = new ol.format.GeoJSON();
var features_HvidovreHospital_2 = format_HvidovreHospital_2.readFeatures(json_HvidovreHospital_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreHospital_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreHospital_2.addFeatures(features_HvidovreHospital_2);
var lyr_HvidovreHospital_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreHospital_2, 
                style: style_HvidovreHospital_2,
                popuplayertitle: 'Hvidovre Hospital',
                interactive: true,
                title: '<img src="styles/legend/HvidovreHospital_2.png" /> Hvidovre Hospital'
            });
var format_Kirker_3 = new ol.format.GeoJSON();
var features_Kirker_3 = format_Kirker_3.readFeatures(json_Kirker_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirker_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirker_3.addFeatures(features_Kirker_3);
var lyr_Kirker_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirker_3, 
                style: style_Kirker_3,
                popuplayertitle: 'Kirker',
                interactive: true,
                title: '<img src="styles/legend/Kirker_3.png" /> Kirker'
            });
var format_Ladestationer_4 = new ol.format.GeoJSON();
var features_Ladestationer_4 = format_Ladestationer_4.readFeatures(json_Ladestationer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ladestationer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladestationer_4.addFeatures(features_Ladestationer_4);
var lyr_Ladestationer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ladestationer_4, 
                style: style_Ladestationer_4,
                popuplayertitle: 'Ladestationer',
                interactive: true,
                title: '<img src="styles/legend/Ladestationer_4.png" /> Ladestationer'
            });
var format_Mosque_5 = new ol.format.GeoJSON();
var features_Mosque_5 = format_Mosque_5.readFeatures(json_Mosque_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_5.addFeatures(features_Mosque_5);
var lyr_Mosque_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_5, 
                style: style_Mosque_5,
                popuplayertitle: 'Mosque',
                interactive: true,
                title: '<img src="styles/legend/Mosque_5.png" /> Mosque'
            });
var format_Lgehuse_6 = new ol.format.GeoJSON();
var features_Lgehuse_6 = format_Lgehuse_6.readFeatures(json_Lgehuse_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgehuse_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgehuse_6.addFeatures(features_Lgehuse_6);
var lyr_Lgehuse_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgehuse_6, 
                style: style_Lgehuse_6,
                popuplayertitle: 'Lægehuse',
                interactive: true,
                title: '<img src="styles/legend/Lgehuse_6.png" /> Lægehuse'
            });
var format_OffentligtWC_7 = new ol.format.GeoJSON();
var features_OffentligtWC_7 = format_OffentligtWC_7.readFeatures(json_OffentligtWC_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OffentligtWC_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OffentligtWC_7.addFeatures(features_OffentligtWC_7);
var lyr_OffentligtWC_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OffentligtWC_7, 
                style: style_OffentligtWC_7,
                popuplayertitle: 'Offentligt WC',
                interactive: true,
                title: '<img src="styles/legend/OffentligtWC_7.png" /> Offentligt WC'
            });
var format_Lystbdehavn_8 = new ol.format.GeoJSON();
var features_Lystbdehavn_8 = format_Lystbdehavn_8.readFeatures(json_Lystbdehavn_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lystbdehavn_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lystbdehavn_8.addFeatures(features_Lystbdehavn_8);
var lyr_Lystbdehavn_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lystbdehavn_8, 
                style: style_Lystbdehavn_8,
                popuplayertitle: 'Lystbådehavn',
                interactive: true,
                title: '<img src="styles/legend/Lystbdehavn_8.png" /> Lystbådehavn'
            });
var format_Sportsfaciliteter_9 = new ol.format.GeoJSON();
var features_Sportsfaciliteter_9 = format_Sportsfaciliteter_9.readFeatures(json_Sportsfaciliteter_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportsfaciliteter_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportsfaciliteter_9.addFeatures(features_Sportsfaciliteter_9);
var lyr_Sportsfaciliteter_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportsfaciliteter_9, 
                style: style_Sportsfaciliteter_9,
                popuplayertitle: 'Sports faciliteter',
                interactive: true,
                title: '<img src="styles/legend/Sportsfaciliteter_9.png" /> Sports faciliteter'
            });
var format_Sportsfaciliteter2_10 = new ol.format.GeoJSON();
var features_Sportsfaciliteter2_10 = format_Sportsfaciliteter2_10.readFeatures(json_Sportsfaciliteter2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportsfaciliteter2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportsfaciliteter2_10.addFeatures(features_Sportsfaciliteter2_10);
var lyr_Sportsfaciliteter2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportsfaciliteter2_10, 
                style: style_Sportsfaciliteter2_10,
                popuplayertitle: 'Sports faciliteter 2',
                interactive: true,
                title: '<img src="styles/legend/Sportsfaciliteter2_10.png" /> Sports faciliteter 2'
            });
var format_Supermarkeder365Discount_11 = new ol.format.GeoJSON();
var features_Supermarkeder365Discount_11 = format_Supermarkeder365Discount_11.readFeatures(json_Supermarkeder365Discount_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarkeder365Discount_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarkeder365Discount_11.addFeatures(features_Supermarkeder365Discount_11);
var lyr_Supermarkeder365Discount_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarkeder365Discount_11, 
                style: style_Supermarkeder365Discount_11,
                popuplayertitle: 'Supermarkeder — 365Discount',
                interactive: true,
                title: '<img src="styles/legend/Supermarkeder365Discount_11.png" /> Supermarkeder — 365Discount'
            });
var format_SupermarkederFtex_12 = new ol.format.GeoJSON();
var features_SupermarkederFtex_12 = format_SupermarkederFtex_12.readFeatures(json_SupermarkederFtex_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupermarkederFtex_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupermarkederFtex_12.addFeatures(features_SupermarkederFtex_12);
var lyr_SupermarkederFtex_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupermarkederFtex_12, 
                style: style_SupermarkederFtex_12,
                popuplayertitle: 'Supermarkeder — Føtex',
                interactive: true,
                title: '<img src="styles/legend/SupermarkederFtex_12.png" /> Supermarkeder — Føtex'
            });
var format_SupermarkederKvickley_13 = new ol.format.GeoJSON();
var features_SupermarkederKvickley_13 = format_SupermarkederKvickley_13.readFeatures(json_SupermarkederKvickley_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupermarkederKvickley_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupermarkederKvickley_13.addFeatures(features_SupermarkederKvickley_13);
var lyr_SupermarkederKvickley_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupermarkederKvickley_13, 
                style: style_SupermarkederKvickley_13,
                popuplayertitle: 'Supermarkeder — Kvickley',
                interactive: true,
                title: '<img src="styles/legend/SupermarkederKvickley_13.png" /> Supermarkeder — Kvickley'
            });
var format_SupermarkederLidl_14 = new ol.format.GeoJSON();
var features_SupermarkederLidl_14 = format_SupermarkederLidl_14.readFeatures(json_SupermarkederLidl_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupermarkederLidl_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupermarkederLidl_14.addFeatures(features_SupermarkederLidl_14);
var lyr_SupermarkederLidl_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupermarkederLidl_14, 
                style: style_SupermarkederLidl_14,
                popuplayertitle: 'Supermarkeder — Lidl',
                interactive: true,
                title: '<img src="styles/legend/SupermarkederLidl_14.png" /> Supermarkeder — Lidl'
            });
var format_SupermarkederNetto_15 = new ol.format.GeoJSON();
var features_SupermarkederNetto_15 = format_SupermarkederNetto_15.readFeatures(json_SupermarkederNetto_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupermarkederNetto_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupermarkederNetto_15.addFeatures(features_SupermarkederNetto_15);
var lyr_SupermarkederNetto_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupermarkederNetto_15, 
                style: style_SupermarkederNetto_15,
                popuplayertitle: 'Supermarkeder — Netto',
                interactive: true,
                title: '<img src="styles/legend/SupermarkederNetto_15.png" /> Supermarkeder — Netto'
            });
var format_Togstationer_16 = new ol.format.GeoJSON();
var features_Togstationer_16 = format_Togstationer_16.readFeatures(json_Togstationer_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_16.addFeatures(features_Togstationer_16);
var lyr_Togstationer_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_16, 
                style: style_Togstationer_16,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_16.png" /> Togstationer'
            });
var format_Brnehaver_17 = new ol.format.GeoJSON();
var features_Brnehaver_17 = format_Brnehaver_17.readFeatures(json_Brnehaver_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_17.addFeatures(features_Brnehaver_17);
var lyr_Brnehaver_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_17, 
                style: style_Brnehaver_17,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_17.png" /> Børnehaver'
            });
var format_kommuneplan_18 = new ol.format.GeoJSON();
var features_kommuneplan_18 = format_kommuneplan_18.readFeatures(json_kommuneplan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_18.addFeatures(features_kommuneplan_18);
var lyr_kommuneplan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_18, 
                style: style_kommuneplan_18,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_18.png" /> kommuneplan'
            });
var format_Legepladser_19 = new ol.format.GeoJSON();
var features_Legepladser_19 = format_Legepladser_19.readFeatures(json_Legepladser_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legepladser_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legepladser_19.addFeatures(features_Legepladser_19);
var lyr_Legepladser_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legepladser_19, 
                style: style_Legepladser_19,
                popuplayertitle: 'Legepladser',
                interactive: true,
                title: '<img src="styles/legend/Legepladser_19.png" /> Legepladser'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Folkeskoler_1.setVisible(true);lyr_HvidovreHospital_2.setVisible(true);lyr_Kirker_3.setVisible(true);lyr_Ladestationer_4.setVisible(true);lyr_Mosque_5.setVisible(true);lyr_Lgehuse_6.setVisible(true);lyr_OffentligtWC_7.setVisible(true);lyr_Lystbdehavn_8.setVisible(true);lyr_Sportsfaciliteter_9.setVisible(true);lyr_Sportsfaciliteter2_10.setVisible(true);lyr_Supermarkeder365Discount_11.setVisible(true);lyr_SupermarkederFtex_12.setVisible(true);lyr_SupermarkederKvickley_13.setVisible(true);lyr_SupermarkederLidl_14.setVisible(true);lyr_SupermarkederNetto_15.setVisible(true);lyr_Togstationer_16.setVisible(true);lyr_Brnehaver_17.setVisible(true);lyr_kommuneplan_18.setVisible(true);lyr_Legepladser_19.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Folkeskoler_1,lyr_HvidovreHospital_2,lyr_Kirker_3,lyr_Ladestationer_4,lyr_Mosque_5,lyr_Lgehuse_6,lyr_OffentligtWC_7,lyr_Lystbdehavn_8,lyr_Sportsfaciliteter_9,lyr_Sportsfaciliteter2_10,lyr_Supermarkeder365Discount_11,lyr_SupermarkederFtex_12,lyr_SupermarkederKvickley_13,lyr_SupermarkederLidl_14,lyr_SupermarkederNetto_15,lyr_Togstationer_16,lyr_Brnehaver_17,lyr_kommuneplan_18,lyr_Legepladser_19];
lyr_Folkeskoler_1.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HvidovreHospital_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kirker_3.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Religion': 'Religion', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Ladestationer_4.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Leverandø': 'Leverandø', 'Lukketid': 'Lukketid', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Mosque_5.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Religion': 'Religion', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Lgehuse_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_OffentligtWC_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lystbdehavn_8.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Sportsfaciliteter_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Website': 'Website', });
lyr_Sportsfaciliteter2_10.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Supermarkeder365Discount_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SupermarkederFtex_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SupermarkederKvickley_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SupermarkederLidl_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SupermarkederNetto_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Brnehaver_17.set('fieldAliases', {'Instutionn': 'Instutionn', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_kommuneplan_18.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Legepladser_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Folkeskoler_1.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_HvidovreHospital_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Kirker_3.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Religion': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Ladestationer_4.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Leverandø': 'TextEdit', 'Lukketid': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Mosque_5.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Religion': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Lgehuse_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_OffentligtWC_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Lystbdehavn_8.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Sportsfaciliteter_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'Website': 'TextEdit', });
lyr_Sportsfaciliteter2_10.set('fieldImages', {'fid': 'TextEdit', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Supermarkeder365Discount_11.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_SupermarkederFtex_12.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_SupermarkederKvickley_13.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_SupermarkederLidl_14.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_SupermarkederNetto_15.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Togstationer_16.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Brnehaver_17.set('fieldImages', {'Instutionn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_kommuneplan_18.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_Legepladser_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Folkeskoler_1.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_HvidovreHospital_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Kirker_3.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Religion': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Ladestationer_4.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Leverandø': 'no label', 'Lukketid': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Mosque_5.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Religion': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Lgehuse_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_OffentligtWC_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Lystbdehavn_8.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Sportsfaciliteter_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'Website': 'no label', });
lyr_Sportsfaciliteter2_10.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Supermarkeder365Discount_11.set('fieldLabels', {'Name': 'no label', });
lyr_SupermarkederFtex_12.set('fieldLabels', {'Name': 'no label', });
lyr_SupermarkederKvickley_13.set('fieldLabels', {'Name': 'no label', });
lyr_SupermarkederLidl_14.set('fieldLabels', {'Name': 'no label', });
lyr_SupermarkederNetto_15.set('fieldLabels', {'Name': 'no label', });
lyr_Togstationer_16.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Brnehaver_17.set('fieldLabels', {'Instutionn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefonnum': 'no label', });
lyr_kommuneplan_18.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_Legepladser_19.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Legepladser_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});