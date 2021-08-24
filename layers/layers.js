ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([429985.819415, 7375183.852113, 445022.067948, 7384215.033276]);
var wms_layers = [];

var lyr_Pala6_0 = new ol.layer.Image({
  opacity: 1,
  title: "Pala 6",


  source: new ol.source.ImageStatic({
    url: "./layers/Pala6_0.png",
    attributions: ' ',
    projection: 'EPSG:3067',
    alwaysInRange: true,
    imageExtent: [436753.268552, 7378483.484355, 437042.215708, 7378772.431512]
  })
});
var lyr_Pala5_1 = new ol.layer.Image({
  opacity: 1,
  title: "Pala 5",


  source: new ol.source.ImageStatic({
    url: "./layers/Pala5_1.png",
    attributions: ' ',
    projection: 'EPSG:3067',
    alwaysInRange: true,
    imageExtent: [438531.400124, 7381078.965375, 438818.634258, 7381366.199509]
  })
});
var lyr_Pala4_2 = new ol.layer.Image({
  opacity: 1,
  title: "Pala 4",


  source: new ol.source.ImageStatic({
    url: "./layers/Pala4_2.png",
    attributions: ' ',
    projection: 'EPSG:3067',
    alwaysInRange: true,
    imageExtent: [435896.654765, 7380258.304483, 436191.225555, 7380552.875273]
  })
});
var lyr_Pala3_3 = new ol.layer.Image({
  opacity: 1,
  title: "Pala 3",


  source: new ol.source.ImageStatic({
    url: "./layers/Pala3_3.png",
    attributions: ' ',
    projection: 'EPSG:3067',
    alwaysInRange: true,
    imageExtent: [435134.192657, 7380364.232562, 435423.093375, 7380653.133280]
  })
});
var lyr_Pala2_4 = new ol.layer.Image({
  opacity: 1,
  title: "Pala 2",


  source: new ol.source.ImageStatic({
    url: "./layers/Pala2_4.png",
    attributions: ' ',
    projection: 'EPSG:3067',
    alwaysInRange: true,
    imageExtent: [438034.120985, 7381390.290760, 438312.356678, 7381668.526453]
  })
});
var lyr_Pala1_5 = new ol.layer.Image({
  opacity: 1,
  title: "Pala 1",


  source: new ol.source.ImageStatic({
    url: "./layers/Pala1_5.png",
    attributions: ' ',
    projection: 'EPSG:3067',
    alwaysInRange: true,
    imageExtent: [435811.176771, 7379864.908394, 436084.213462, 7380137.945085]
  })
});
var lyr_Viimeinen = new ol.layer.Image({
  opacity: 1,
  title: "Viimeiset rastit",


  source: new ol.source.ImageStatic({
    url: "./layers/Viimeinen.png",
    attributions: ' ',
    projection: 'EPSG:3067',
    alwaysInRange: true,
    imageExtent: [437496.8166784326313064, 7377589.1577097279950976, 437841.3119976038578898, 7377846.0890012839809060]
  })
});

var extent = [434797.0555937842000276, 7377554.9092494454234838, 439217.5708696258370765, 7381575.2685252260416746]
var lyr_hakkuut = new ol.layer.Image({
  opacity: 1,
  title: "Uusia hakkuita",

  source: new ol.source.ImageStatic({
    url: "./layers/hakkuut.svg",
    imageExtent: extent,
    attributions: 'hakkuut by <a href="https://www.instagram.com/makkomikko/">@makkomikko</a>',
    projection: 'EPSG:3067',
    alwaysInRange: true,
  })
})

var lyr_MapAnt_6 = new ol.layer.Tile({
  source: new ol.source.TileWMS(({
    url: "http://wms.mapant.fi/wms.php",
    attributions: ' ',
    params: {
      "LAYERS": "MapAntFi",
      "TILED": "true",
      "VERSION": "1.1.1"
    },
  })),
  title: "MapAnt",
  opacity: 1.000000,


});
wms_layers.push([lyr_MapAnt_6, 0]);
var lyr_Vanhakartta_7 = new ol.layer.Image({
  opacity: 1,
  title: "Vanha kartta",


  source: new ol.source.ImageStatic({
    url: "./layers/Vanhakartta_7.png",
    attributions: ' ',
    projection: 'EPSG:3067',
    alwaysInRange: true,
    imageExtent: [434042.366259, 7376349.685515, 440321.662803, 7382656.890044]
  })
});
var format_Harjoituskieltoalue_8 = new ol.format.GeoJSON();
var features_Harjoituskieltoalue_8 = format_Harjoituskieltoalue_8.readFeatures(json_Harjoituskieltoalue_8, { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067' });
var jsonSource_Harjoituskieltoalue_8 = new ol.source.Vector({
  attributions: ' ',
});
jsonSource_Harjoituskieltoalue_8.addFeatures(features_Harjoituskieltoalue_8);
var lyr_Harjoituskieltoalue_8 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource_Harjoituskieltoalue_8,
  style: style_Harjoituskieltoalue_8,
  interactive: false,
  title: 'Harjoituskieltoalue'
});
var group_Karttapalat = new ol.layer.Group({
  layers: [lyr_Pala6_0, lyr_Pala5_1, lyr_Pala4_2, lyr_Pala3_3, lyr_Pala2_4, lyr_Pala1_5, lyr_Viimeinen],
  title: "Karttapalat"
});

lyr_Pala6_0.setVisible(true);
lyr_Pala5_1.setVisible(true);
lyr_Pala4_2.setVisible(true);
lyr_Pala3_3.setVisible(true);
lyr_Pala2_4.setVisible(true);
lyr_Pala1_5.setVisible(true);
lyr_Viimeinen.setVisible(true);
lyr_hakkuut.setVisible(true);
lyr_MapAnt_6.setVisible(true);
lyr_Vanhakartta_7.setVisible(true);
lyr_Harjoituskieltoalue_8.setVisible(true);
var layersList = [lyr_MapAnt_6, lyr_Vanhakartta_7, lyr_hakkuut, group_Karttapalat, lyr_Harjoituskieltoalue_8];
//lyr_Harjoituskieltoalue_8.set('fieldAliases', { 'name': 'name', 'club': 'club', 'contact_person': 'contact_person', 'email': 'email', 'www': 'www', 'aluevoimassa_alkaa': 'aluevoimassa_alkaa', 'aluevoimassa_loppuu': 'aluevoimassa_loppuu', 'lisatiedot': 'lisatiedot', 'phone': 'phone', 'mittakaava': 'mittakaava', 'maastotyyppi': 'maastotyyppi', 'maaston_erityispiirteet': 'maaston_erityispiirteet', 'maaston_korkeus': 'maaston_korkeus', 'valmistumisvuosi': 'valmistumisvuosi', 'osoite': 'osoite', 'kl_numero': 'kl_numero', 'kv_numero': 'kv_numero', 'sijainti': 'sijainti', 'alue': 'alue', 'raporttinumero': 'raporttinumero', 'kartanlaji': 'kartanlaji', 'kayravali': 'kayravali', 'club_id': 'club_id', 'file': 'file', });
//lyr_Harjoituskieltoalue_8.set('fieldImages', { 'name': 'TextEdit', 'club': 'TextEdit', 'contact_person': 'TextEdit', 'email': 'TextEdit', 'www': 'TextEdit', 'aluevoimassa_alkaa': 'DateTime', 'aluevoimassa_loppuu': 'DateTime', 'lisatiedot': 'TextEdit', 'phone': 'TextEdit', 'mittakaava': 'TextEdit', 'maastotyyppi': 'TextEdit', 'maaston_erityispiirteet': 'TextEdit', 'maaston_korkeus': 'TextEdit', 'valmistumisvuosi': 'TextEdit', 'osoite': 'TextEdit', 'kl_numero': 'TextEdit', 'kv_numero': 'TextEdit', 'sijainti': 'TextEdit', 'alue': 'TextEdit', 'raporttinumero': 'TextEdit', 'kartanlaji': 'TextEdit', 'kayravali': 'TextEdit', 'club_id': 'TextEdit', 'file': 'TextEdit', });
//lyr_Harjoituskieltoalue_8.set('fieldLabels', { 'name': 'no label', 'club': 'no label', 'contact_person': 'no label', 'email': 'no label', 'www': 'no label', 'aluevoimassa_alkaa': 'no label', 'aluevoimassa_loppuu': 'no label', 'lisatiedot': 'no label', 'phone': 'no label', 'mittakaava': 'no label', 'maastotyyppi': 'no label', 'maaston_erityispiirteet': 'no label', 'maaston_korkeus': 'no label', 'valmistumisvuosi': 'no label', 'osoite': 'no label', 'kl_numero': 'no label', 'kv_numero': 'no label', 'sijainti': 'no label', 'alue': 'no label', 'raporttinumero': 'no label', 'kartanlaji': 'no label', 'kayravali': 'no label', 'club_id': 'no label', 'file': 'no label', });
lyr_Harjoituskieltoalue_8.on('precompose', function (evt) {
  evt.context.globalCompositeOperation = 'normal';
});