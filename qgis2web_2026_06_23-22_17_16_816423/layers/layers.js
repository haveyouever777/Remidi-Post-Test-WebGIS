var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KECAMATANWONOKROMO_1 = new ol.format.GeoJSON();
var features_KECAMATANWONOKROMO_1 = format_KECAMATANWONOKROMO_1.readFeatures(json_KECAMATANWONOKROMO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATANWONOKROMO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATANWONOKROMO_1.addFeatures(features_KECAMATANWONOKROMO_1);
var lyr_KECAMATANWONOKROMO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KECAMATANWONOKROMO_1, 
                style: style_KECAMATANWONOKROMO_1,
                popuplayertitle: 'KECAMATAN WONOKROMO',
                interactive: false,
                title: '<img src="styles/legend/KECAMATANWONOKROMO_1.png" /> KECAMATAN WONOKROMO'
            });
var format_BUFFER40METERSERVICEAREA_2 = new ol.format.GeoJSON();
var features_BUFFER40METERSERVICEAREA_2 = format_BUFFER40METERSERVICEAREA_2.readFeatures(json_BUFFER40METERSERVICEAREA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER40METERSERVICEAREA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER40METERSERVICEAREA_2.addFeatures(features_BUFFER40METERSERVICEAREA_2);
var lyr_BUFFER40METERSERVICEAREA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER40METERSERVICEAREA_2, 
                style: style_BUFFER40METERSERVICEAREA_2,
                popuplayertitle: 'BUFFER 40 METER SERVICE AREA',
                interactive: false,
                title: '<img src="styles/legend/BUFFER40METERSERVICEAREA_2.png" /> BUFFER 40 METER SERVICE AREA'
            });
var format_BUFFER40METERSERVICEAREA250METER_3 = new ol.format.GeoJSON();
var features_BUFFER40METERSERVICEAREA250METER_3 = format_BUFFER40METERSERVICEAREA250METER_3.readFeatures(json_BUFFER40METERSERVICEAREA250METER_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER40METERSERVICEAREA250METER_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER40METERSERVICEAREA250METER_3.addFeatures(features_BUFFER40METERSERVICEAREA250METER_3);
var lyr_BUFFER40METERSERVICEAREA250METER_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER40METERSERVICEAREA250METER_3, 
                style: style_BUFFER40METERSERVICEAREA250METER_3,
                popuplayertitle: 'BUFFER 40 METER SERVICE AREA 250 METER',
                interactive: false,
                title: '<img src="styles/legend/BUFFER40METERSERVICEAREA250METER_3.png" /> BUFFER 40 METER SERVICE AREA 250 METER'
            });
var format_RUASJALANKECAMATANWONOKROMO_4 = new ol.format.GeoJSON();
var features_RUASJALANKECAMATANWONOKROMO_4 = format_RUASJALANKECAMATANWONOKROMO_4.readFeatures(json_RUASJALANKECAMATANWONOKROMO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUASJALANKECAMATANWONOKROMO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUASJALANKECAMATANWONOKROMO_4.addFeatures(features_RUASJALANKECAMATANWONOKROMO_4);
var lyr_RUASJALANKECAMATANWONOKROMO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUASJALANKECAMATANWONOKROMO_4, 
                style: style_RUASJALANKECAMATANWONOKROMO_4,
                popuplayertitle: 'RUAS JALAN KECAMATAN WONOKROMO',
                interactive: false,
                title: '<img src="styles/legend/RUASJALANKECAMATANWONOKROMO_4.png" /> RUAS JALAN KECAMATAN WONOKROMO'
            });
var format_SERVICEAREAHALTE500METER_5 = new ol.format.GeoJSON();
var features_SERVICEAREAHALTE500METER_5 = format_SERVICEAREAHALTE500METER_5.readFeatures(json_SERVICEAREAHALTE500METER_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SERVICEAREAHALTE500METER_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICEAREAHALTE500METER_5.addFeatures(features_SERVICEAREAHALTE500METER_5);
var lyr_SERVICEAREAHALTE500METER_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICEAREAHALTE500METER_5, 
                style: style_SERVICEAREAHALTE500METER_5,
                popuplayertitle: 'SERVICE AREA HALTE 500 METER',
                interactive: false,
                title: '<img src="styles/legend/SERVICEAREAHALTE500METER_5.png" /> SERVICE AREA HALTE 500 METER'
            });
var format_SERVICEAREAHALTE250METER_6 = new ol.format.GeoJSON();
var features_SERVICEAREAHALTE250METER_6 = format_SERVICEAREAHALTE250METER_6.readFeatures(json_SERVICEAREAHALTE250METER_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SERVICEAREAHALTE250METER_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICEAREAHALTE250METER_6.addFeatures(features_SERVICEAREAHALTE250METER_6);
var lyr_SERVICEAREAHALTE250METER_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICEAREAHALTE250METER_6, 
                style: style_SERVICEAREAHALTE250METER_6,
                popuplayertitle: 'SERVICE AREA HALTE 250 METER',
                interactive: false,
                title: '<img src="styles/legend/SERVICEAREAHALTE250METER_6.png" /> SERVICE AREA HALTE 250 METER'
            });
var format_TITIKHALTEKECAMATANWONOKROMO_7 = new ol.format.GeoJSON();
var features_TITIKHALTEKECAMATANWONOKROMO_7 = format_TITIKHALTEKECAMATANWONOKROMO_7.readFeatures(json_TITIKHALTEKECAMATANWONOKROMO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKHALTEKECAMATANWONOKROMO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKHALTEKECAMATANWONOKROMO_7.addFeatures(features_TITIKHALTEKECAMATANWONOKROMO_7);
var lyr_TITIKHALTEKECAMATANWONOKROMO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKHALTEKECAMATANWONOKROMO_7, 
                style: style_TITIKHALTEKECAMATANWONOKROMO_7,
                popuplayertitle: 'TITIK HALTE KECAMATAN WONOKROMO',
                interactive: true,
                title: '<img src="styles/legend/TITIKHALTEKECAMATANWONOKROMO_7.png" /> TITIK HALTE KECAMATAN WONOKROMO'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_KECAMATANWONOKROMO_1.setVisible(true);lyr_BUFFER40METERSERVICEAREA_2.setVisible(true);lyr_BUFFER40METERSERVICEAREA250METER_3.setVisible(true);lyr_RUASJALANKECAMATANWONOKROMO_4.setVisible(true);lyr_SERVICEAREAHALTE500METER_5.setVisible(true);lyr_SERVICEAREAHALTE250METER_6.setVisible(true);lyr_TITIKHALTEKECAMATANWONOKROMO_7.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_KECAMATANWONOKROMO_1,lyr_BUFFER40METERSERVICEAREA_2,lyr_BUFFER40METERSERVICEAREA250METER_3,lyr_RUASJALANKECAMATANWONOKROMO_4,lyr_SERVICEAREAHALTE500METER_5,lyr_SERVICEAREAHALTE250METER_6,lyr_TITIKHALTEKECAMATANWONOKROMO_7];
lyr_KECAMATANWONOKROMO_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BUFFER40METERSERVICEAREA_2.set('fieldAliases', {'route_ref': 'route_ref', 'operator': 'operator', 'name': 'name', 'type': 'type', 'start': 'start', });
lyr_BUFFER40METERSERVICEAREA250METER_3.set('fieldAliases', {'route_ref': 'route_ref', 'operator': 'operator', 'name': 'name', 'type': 'type', 'start': 'start', });
lyr_RUASJALANKECAMATANWONOKROMO_4.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', });
lyr_SERVICEAREAHALTE500METER_5.set('fieldAliases', {'route_ref': 'route_ref', 'operator': 'operator', 'name': 'name', 'type': 'type', 'start': 'start', });
lyr_SERVICEAREAHALTE250METER_6.set('fieldAliases', {'route_ref': 'route_ref', 'operator': 'operator', 'name': 'name', 'type': 'type', 'start': 'start', });
lyr_TITIKHALTEKECAMATANWONOKROMO_7.set('fieldAliases', {'Rute': 'Rute', 'Operator': 'Operator', 'Nama Halte': 'Nama Halte', 'Foto': 'Foto', });
lyr_KECAMATANWONOKROMO_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BUFFER40METERSERVICEAREA_2.set('fieldImages', {'route_ref': '', 'operator': '', 'name': '', 'type': '', 'start': '', });
lyr_BUFFER40METERSERVICEAREA250METER_3.set('fieldImages', {'route_ref': '', 'operator': '', 'name': '', 'type': '', 'start': '', });
lyr_RUASJALANKECAMATANWONOKROMO_4.set('fieldImages', {'fid': '', 'cat': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'surface': '', 'maxspeed': '', 'ref': '', });
lyr_SERVICEAREAHALTE500METER_5.set('fieldImages', {'route_ref': '', 'operator': '', 'name': '', 'type': '', 'start': '', });
lyr_SERVICEAREAHALTE250METER_6.set('fieldImages', {'route_ref': '', 'operator': '', 'name': '', 'type': '', 'start': '', });
lyr_TITIKHALTEKECAMATANWONOKROMO_7.set('fieldImages', {'Rute': 'TextEdit', 'Operator': 'TextEdit', 'Nama Halte': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_KECAMATANWONOKROMO_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BUFFER40METERSERVICEAREA_2.set('fieldLabels', {'route_ref': 'no label', 'operator': 'no label', 'name': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_BUFFER40METERSERVICEAREA250METER_3.set('fieldLabels', {'route_ref': 'no label', 'operator': 'no label', 'name': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_RUASJALANKECAMATANWONOKROMO_4.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'ref': 'no label', });
lyr_SERVICEAREAHALTE500METER_5.set('fieldLabels', {'route_ref': 'no label', 'operator': 'no label', 'name': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_SERVICEAREAHALTE250METER_6.set('fieldLabels', {'route_ref': 'no label', 'operator': 'no label', 'name': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_TITIKHALTEKECAMATANWONOKROMO_7.set('fieldLabels', {'Rute': 'inline label - always visible', 'Operator': 'inline label - always visible', 'Nama Halte': 'inline label - always visible', 'Foto': 'header label - always visible', });
lyr_TITIKHALTEKECAMATANWONOKROMO_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});