/* All visible content lives here. Edit this file to change text, images or order;
   design and behaviour are in css/styles.css and js/app.js. */
window.CONTENT = {
  name: "Marina Pérez",
  tagline: "From Environmental Data to Evidence-Based Decisions",
  linkedin: "https://www.linkedin.com/in/marina-pérez-álvarez-83385b227",

  aboutPhoto: { src: "marina-portrait.jpg", w: 800, h: 735, alt: "Portrait of Marina Pérez smiling in front of relief maps and a hand-drawn mountain panorama" },
  blogCredit: "Text and image by Marina Pérez",

  about:
    "Natural Environmental Engineer specialising in Forestry, with a Master's degree in Environmental Management of Mountain Areas. Experienced in forest ecology, GIS, remote sensing, spatial modelling and habitat mapping. Passionate about using spatial data analysis and statistical modelling to transform complex environmental data into actionable insights that support evidence-based decision-making.",

  /* Projects: sections shown only when present. `figure` on a section is the image that
     stays pinned beside it while that section is on screen (scrollytelling).
     The card summary is the first sentence of the Description. */
  projects: [
    {
      id: 1,
      title: "Mapping species suitability for climate-resilient forest restoration",
      summary: "This project assesses the environmental suitability of native monteverde species to support forest restoration in Tenerife, particularly in landscapes affected by wildfire.",
      cover: { src: "tenerife-map", w: 1367, h: 1135, alt: "Morella faya suitability estimation before cold penalty, mapped over Tenerife in a blue-to-red colour scale" },
      figures: {
        watering: { src: "p1-watering.jpg", w: 736, h: 426, alt: "A man watering plantings carried out after the Arafo wildfire", caption: "Watering the plantings carried out after the Arafo wildfire." },
        records: { src: "p1-species-records.jpg", w: 602, h: 380, alt: "Map of Tenerife with species occurrence records shown as grid cells across the north of the island", caption: "Species occurrence records in Tenerife." },
        workflow: { src: "p1-workflow", w: 800, h: 816, alt: "Workflow: BIOTA presence records; filter for reliable, high-precision occurrences; historical niche extraction; climate variables from SICMA Canarias; topographic variables (elevation and northness); weighted suitability index; historical suitability map; future suitability map (SSP2-4.5, 2041–2070)", caption: "Analysis workflow, from occurrence records to the future suitability map (SSP2-4.5, 2041–2070)." },
        map: { src: "tenerife-map", w: 1367, h: 1135, alt: "Morella faya suitability estimation before cold penalty, mapped over Tenerife in a blue-to-red colour scale", caption: "Morella faya suitability estimation before cold penalty" }
      },
      sections: [
        { key: "Description", figure: "watering", text: "This project assesses the environmental suitability of native monteverde species to support forest restoration in Tenerife, particularly in landscapes affected by wildfire. It addresses the need to select species that are compatible with both historical conditions and the climate expected during the coming decades under different climate change scenarios. The approach was initially applied to Morella faya, with occurrence datasets also prepared for Laurus novocanariensis, Arbutus canariensis and Ilex canariensis. The resulting maps provide a practical basis for incorporating climate adaptation into species selection and planting decisions." },
        { key: "Input Data", figure: "records", text: "Reliable occurrence records from BIOTA Canarias, filtered by confidence and spatial precision; six climatic variables from SICMA Canarias; and elevation and slope orientation derived from GRAFCAN terrain data. Historical conditions cover 1985–2014, while future projections represent 2041–2070 under SSP2-4.5, using the median of the available climate models." },
        { key: "Methodology", figure: "workflow", text: "Species occurrences were organised into 500 × 500 m cells, whose centroids were used to extract climatic and terrain values. These observations defined empirical environmental niches through percentile-based reference ranges. Each variable was transformed into a continuous suitability score according to whether low values, high values or departures from an intermediate range were considered unfavourable. Scores were combined into a weighted index from 0 to 100, prioritising water availability while also accounting for temperature, heatwaves, elevation and north-facing exposure. An additional winter cold penalty reduced suitability in high-mountain areas where frost constraints were insufficiently represented by the initial index. The historical reference ranges were then applied to future environmental conditions to enable consistent comparison between periods." },
        { key: "Tools", figure: "workflow", text: "GIS spatial analysis, raster processing, terrain analysis, environmental data extraction and weighted multicriteria evaluation." },
        { key: "Results", figure: "map", text: "Historical and projected suitability maps identifying favourable areas and potential shifts in environmental compatibility. The index supports restoration planning alongside expert judgement and local site assessment; it represents relative suitability rather than a probability of establishment." }
      ]
    },
    {
      id: 2,
      title: "Spatial analysis of holm oak mortality in a Mediterranean dehesa",
      summary: "This master’s thesis investigates the spatial distribution of holm oak mortality in a Mediterranean dehesa affected by Phytophthora cinnamomi.",
      cover: { src: "p2-orthophoto", w: 661, h: 468, alt: "Aerial orthophoto of scattered holm oak trees in a dehesa, dated 2010" },
      figures: {
        ortho: { src: "p2-orthophoto", w: 661, h: 468, alt: "Aerial orthophoto of scattered holm oak trees in a dehesa, dated 2010", caption: "Orthophoto of the dehesa (2010)." },
        slope: { src: "p2-slope", w: 1600, h: 1131, alt: "Slope raster in a blue-green-yellow colour scale, legend from 0 to 169.43", caption: "Terrain slope raster (legend range 0–169.43)." },
        classification: { src: "p2-classification.jpg", w: 616, h: 398, alt: "Orthophoto in which tree crowns are separated from the surrounding ground, shaded red", caption: "Image classification separating tree crowns from the surrounding ground." },
        exgr: { src: "p2-exgr", w: 1400, h: 990, alt: "Tree crowns highlighted in warm colours over a blue background in a vegetation index raster labelled ExGR = ExG − ExR", caption: "Vegetation index raster (ExGR = ExG − ExR) highlighting tree crowns." },
        flow: { src: "p2-water-flow.jpg", w: 602, h: 352, alt: "Terrain raster showing branching water flow lines in blue over a yellow and orange surface", caption: "Terrain-derived water flow pathways." }
      },
      sections: [
        { key: "Description", figure: "ortho", text: "This master’s thesis investigates the spatial distribution of holm oak mortality in a Mediterranean dehesa affected by Phytophthora cinnamomi. Using high-resolution orthophotos spanning 12 years, it examines mortality patterns in relation to topography, potential water movement pathways and proximity to previously mapped mortality clusters and roads. The study explores whether terrain-derived indicators can help explain where mortality occurs and provide a reproducible basis for further investigation. Its interpretation remains exploratory, recognising that spatial associations alone cannot establish the mechanisms responsible for tree decline." },
        { key: "Input Data", figure: "slope", text: "Multitemporal PNOA orthophotos, a dehesa study-area mask, mapped mortality locations, terrain-derived variables and distances to mortality clusters and roads. Predictors included aspect, slope, plan curvature, topographic wetness index (TWI), proximity to the hydrological network, distance to tracks, and distance to the nearest disease foci." },
        { key: "Methodology", figure: "classification", text: "Mortality was assessed using image classification to identify tree crowns and their condition. A Boolean condition was then used to determine the year in which each tree crown disappeared, allowing mortality to be tracked over time. Spatial clustering was used to describe concentrations of mortality, while GIS analysis generated terrain and proximity variables representing potential environmental associations. A binomial generalised linear model was used to examine mortality presence in relation to these predictors. Aspect was represented through sine and cosine components to account for its circular nature. Model discrimination was assessed using the area under the receiver operating characteristic curve, and estimated associations were interpreted in terms of their ecological plausibility and methodological limitations. Mortality clusters were treated as spatial features rather than confirmed infection sources." },
        { key: "Tools", figure: "exgr", text: "GIS, GRASS and raster analysis, orthophoto interpretation, image classification, terrain modelling, DBSCAN spatial clustering and binomial logistic regression." },
        { key: "Results", figure: "flow", text: "Models showed limited discriminatory performance, with AUC values of 0.596–0.616. Higher topographic wetness was associated with increased mortality occurrence. The findings support further investigation and field validation before predictive or wider management use." }
      ]
    },
    {
      id: 3,
      title: "Mapping of terrestrial habitats: improving spatial information at the national level",
      summary: "This project develops consistent mapping of Spain’s terrestrial and coastal habitats at 1:25,000 scale to support biodiversity conservation, environmental reporting and territorial planning.",
      cover: { src: "p3-correlation-matrix.jpg", w: 1100, h: 860, alt: "Correlation matrix of water chemistry variables shown as a triangular heat map from red to blue", contain: true },
      figures: {
        logo: { src: "natura2000", w: 250, h: 250, alt: "Natura 2000 logo", caption: "Habitat types are related to the Habitats Directive (Natura 2000) classification.", contain: true },
        variables: { src: "p3-river-variables.png", w: 481, h: 480, alt: "Table of the main physical parameters for each type of lotic ecosystem", caption: "Main physical parameters for each type of lotic ecosystem." },
        correlation: { src: "p3-correlation-matrix.jpg", w: 1100, h: 860, alt: "Triangular correlation matrix between temperature, dissolved oxygen, conductivity, salinity, turbidity, alkalinity and pH", caption: "Correlation matrix of water chemistry variables (labels in Spanish)." },
        groups: { src: "p3-group-similarities.png", w: 555, h: 300, alt: "Diagram linking Water Framework Directive river types 8, 11, 12, 25 and 26 with Habitats Directive types 3220, 3230 and 3240, in Spanish", caption: "Links between Water Framework Directive river types and Habitats Directive habitat types (in Spanish)." }
      },
      sections: [
        { key: "Description", figure: "logo", text: "This project develops consistent mapping of Spain’s terrestrial and coastal habitats at 1:25,000 scale to support biodiversity conservation, environmental reporting and territorial planning. It brings together national and regional information within a common habitat classification framework, addressing differences in mapping scales, interpretation and source datasets. My contribution focused on lotic habitats, including rivers and streams, with particular attention to the physicochemical characteristics of water. This work contributed to the wider effort to characterise aquatic environments within a harmonised national habitat framework." },
        { key: "Input Data", figure: "variables", text: "Spanish Forest Map (MFE), regional habitat maps, national spatial datasets, hydrographic information, scientific literature and field observations. My analysis focused on water chemistry variables, including alkalinity, salinity and dissolved oxygen." },
        { key: "Methodology", figure: "correlation", text: "The wider project harmonised habitat information using the updated Spanish Habitat Reference List and its relationships with EUNIS and Habitats Directive types. Habitat assignments combined existing cartography, spatial integration, photointerpretation, expert judgement and field observations. For lotic habitats, the national hydrographic network provided the spatial reference for organising habitat information. My contribution included statistical analysis of physicochemical datasets in R, using correlation and similarity matrices to examine relationships among water chemistry variables across different lotic habitats and classification groups, and to identify potential linkages between classifications where applicable. These analyses supported the interpretation of environmental characteristics relevant to river and stream habitats within the broader mapping process." },
        { key: "Tools", figure: "correlation", text: "GIS mapping, spatial overlay, geodatabases, ETL workflows and statistical analysis in R. The wider project envisaged a transition to a normalised PostGIS database." },
        { key: "Results", figure: "groups", text: "The wider project produced an updated habitat reference list and advanced national habitat mapping, supported by methodological reports and a map viewer." }
      ]
    },
    {
      id: 4,
      title: "Carbon Markets and the Transformation of Forest Management",
      summary: "This project assesses the carbon storage capacity and ecological significance of two native forest ecosystems threatened by harvesting.",
      cover: { src: "p4-carbon-sink.png", w: 505, h: 437, alt: "Diagram of carbon flows between the atmosphere and an aquifer, a power plant and a forest", contain: true },
      figures: {
        sink: { src: "p4-carbon-sink.png", w: 505, h: 437, alt: "Diagram of carbon flows between the atmosphere and an aquifer, a power plant and a forest: positive flow as emission, neutral flow as transfer and negative flow as removal", caption: "Carbon sinks, reservoirs and sources: emission, transfer and removal flows." },
        histogram: { src: "p4-carbon-histogram.png", w: 380, h: 276, alt: "Histogram with density curve of carbon stock in tCO2e per hectare, with a vertical line at 220", caption: "Distribution of carbon stock per hectare (tCO₂e/ha)." }
      },
      sections: [
        { key: "Description", figure: "sink", text: "This project assesses the carbon storage capacity and ecological significance of two native forest ecosystems threatened by harvesting. The report supports a conservation initiative intended to protect existing forest carbon stocks and preserve biodiversity in a fragmented landscape. It combines forest inventory information with an assessment of environmental conditions, species conservation value and landscape connectivity. The reporting approach draws on ISO 14064-2 to organise the comparison between a forest-clearance baseline and a proposed conservation scenario." },
        { key: "Input Data", figure: "histogram", text: "Forest inventories, fieldwork, tree species observations, forest boundaries, elevation and climate information, conservation-status records and scientific literature." },
        { key: "Methodology", figure: "sink", text: "The assessment first characterised the forest’s location, environmental setting, vegetation and ecological importance using inventory records and supporting spatial and documentary sources. It compiled the reported above-ground carbon stock. Aerial imagery was interpreted to assess the forest’s position relative to surrounding native forest patches. The report then compared a baseline scenario involving forest clearance and conversion with a project scenario centred on conservation. This comparison considered potential carbon release, habitat loss and changes in landscape connectivity, providing a technical basis for the proposed protection initiative." },
        { key: "Tools", figure: "histogram", text: "Forest inventory assessment, spatial mapping, allometric equations, carbon modelling, conservation-status review and greenhouse gas reporting guided by ISO 14064-2." },
        { key: "Results", figure: "histogram", text: "The report estimated above-ground carbon stocks of CO₂ and documented tree species. It highlighted the forest’s value for protecting carbon stocks, conserving threatened flora and maintaining connectivity between native forest patches." }
      ]
    }
  ],

  /* Career timeline, in chronological order. kind: "study" | "work" */
  career: [
    { period: "2018 – 2023", title: "Bachelor's degree in Natural Environmental Engineering, Spain", kind: "study", tone: "#4d6b1e" },
    { period: "2021 – 2022", title: "Erasmus Exchange NTNU, Norway", kind: "study", tone: "#7f9f8a" },
    { period: "2022", title: "Urban Tree Management Intern, Spain", kind: "work", tone: "#a9a82b" },
    { period: "2023", title: "TATU Project – Water and Environment Programme Assistant, Tanzania", detail: "Cooperation scholarship", kind: "work", tone: "#7a4f3c" },
    { period: "2023 – 2024", title: "Environmental Consulting Assistant, Spain", kind: "work", tone: "#0fae63" },
    { period: "2024 – 2026", title: "Master in Environmental Management of Mountain Areas, Italy & Austria", kind: "study", tone: "#9ad85b" },
    { period: "2025 – 2026", title: "Environmental and Spatial Data Technician, Spain", kind: "work", tone: "#16c24a" },
    { period: "2026", title: "Forest Restoration Technician, Spain", kind: "work", tone: "#c6d400" }
  ],

  technical: {
    title: "Technical Profile",
    subtitle: "Tools, Capabilities, and Method",
    skillsLabel: "Technical Skills",
    skills: "Raster and vector data processing, multitemporal analysis, spatial databases, quality control and cartographic communication.",
    toolsLabel: "Tools",
    tools: ["QGIS", "ArcGIS", "GRASS", "Python", "R", "rasterio", "GeoPandas", "Shapely", "GDAL/OGR", "xarray", "rioxarray", "terra", "sf"],
    toolsNote: "Alongside workflows using satellite remote sensing imagery."
  },

  articles: [
    {
      id: 1,
      title: "Rediscovering a Norwegian garden",
      image: { src: "blog-norway", w: 1600, h: 1068, alt: "Hillside of autumn birch forest in ochre tones below a snow-dusted mountain" },
      caption: "Deciduous forests in Besseggen, October 2021.",
      paragraphs: [
        "A third of Norway's territory is covered by forests. Anyone who has walked through them will have noticed that they are not simply vast stands of conifers: birch, rowan and other deciduous trees are also common. These trees have evolved to withstand the strong seasonality of their habitats, coping with harsh winters and mild summers.",
        "The distribution of ecosystems is determined by climate, which is often influenced by latitude. Yet, if we look at the global distribution of deciduous forests, we may notice that in North America they are found farther south than in Europe. Anyone walking through a Norwegian forest might therefore wonder how alders can grow so far north. Perhaps not every visitor asks this question, but I did—and found the answer much farther south than I had imagined, in the Caribbean Sea.",
        "Ocean currents are large masses of cold or warm water that move around the planet, transporting water from one place to another. The Gulf Stream, originating in the Gulf of Mexico, carries a constant flow of warm water towards the coasts of northern Europe. As a result, Norway and Iceland have a more humid and temperate climate than other places at the same latitude in the Northern Hemisphere.",
        "Proximity to the sea and abundant rainfall allow deciduous forests to thrive in this part of Scandinavia, thanks to the favourable climate influenced by warm tropical waters from the other side of the Atlantic. For travellers visiting in autumn, the result is a colourful landscape filled with ochre tones."
      ]
    },
    {
      id: 2,
      title: "See the barley dance",
      image: { src: "blog-harrier", w: 740, h: 555, alt: "Two chicks in a nest on the ground within a cereal field" },
      caption: "Montagu's harrier chicks near Fresno de Cantespino, July 2020.",
      paragraphs: [
        "Travelling across large parts of the Spanish plateaus means spending hours in the car looking out over seemingly empty crop fields in ochre tones. Yet these apparently monotonous landscapes can reveal complex food chains to anyone willing to pause and look beyond the wheat. Steppe birds, small mammals and arthropods inhabit these cereal plains, and their survival is being threatened by the abandonment of traditional farming practices.",
        "The Common Agricultural Policy (CAP) was established in 1962 to increase agricultural production and ensure affordable food for Europe's impoverished population in the aftermath of the Second World War. Within a few decades, shortages had given way to surpluses of many products.",
        "Agricultural intensification played a major role in this success. It transformed the way we produce food so rapidly that species have had little time to adapt.",
        "Agricultural machinery, increasingly uniform crops, the loss of field boundaries and fences, and the use of fertilisers are just some of the changes introduced to meet current demand.",
        "One of the species affected by these changes is Montagu's harrier (Circus pygargus). This small bird of prey flies more than 6,000 km from Africa each spring to breed in the Iberian Peninsula. Once there, the female builds a nest on the ground in cereal fields, where her chicks hatch. They need to spend around a month in the nest before learning to fly. However, it is estimated that 60% of the young never leave it, falling victim to the blades of harvesters.",
        "The common vole is one of the harrier's prey species. During the breeding season, each harrier can catch up to a dozen voles a day: around 300 individuals a month.",
        "The current lack of vole predators means that their populations often reach outbreak levels, causing substantial economic losses for farmers and prompting the use of rodenticides.",
        "Are we really becoming more efficient?"
      ],
      closing: true
    },
    {
      id: 3,
      title: "Inside the life of a Large Blue",
      image: { src: "blog-large-blue", w: 1600, h: 1200, alt: "Large Blue butterfly with spotted pale wings resting on a red clover flower" },
      extraImages: [{ src: "blog-large-blue-meadow", w: 1600, h: 1200, alt: "Large Blue butterfly feeding on red clover in a mountain meadow among grasses and yellow flowers" }],
      caption: "Large Blue in Revilla, July 2021.",
      paragraphs: [
        "Anyone who has walked through Ordesa y Monte Perdido National Park will recognise its special charm. Yet what makes this place truly magical is its inhabitants. While exploring the uninhabited village of Revilla, I encountered one of its least-known residents—and perhaps one of its most interesting: the Large Blue (Phengaris arion).",
        "This endangered butterfly, a member of the Lycaenidae family, can easily go unnoticed by anyone unfamiliar with its story. Its complex life cycle, however, is hard to forget.",
        "Adult P. arion lay their eggs on herbaceous plants such as oregano. After hatching, the caterpillars spend a few days feeding on the leaves before dropping to the ground. There, they release a pheromone that tricks ants of the genus Myrmica into mistaking them for their own larvae and carrying them into the nest.",
        "Once inside, these cunning outsiders feed on protein-rich ant larvae. Eventually, they form a chrysalis in this unusual shelter, spending the winter protected from the cold. When summer arrives, the adult emerges from the ant nest as a magnificent butterfly. With a lifespan of just 5–10 days, it must quickly find a mate and begin the cycle again.",
        "This elusive species can be seen flying from late June to early August. It inhabits moist, grassy mountain meadows and is highly sensitive to habitat alteration. The loss of Myrmica ants or the plants on which it lays its eggs—for example, following the abandonment of traditional livestock grazing—inevitably leads to the disappearance of this remarkable species."
      ]
    }
  ]
};
