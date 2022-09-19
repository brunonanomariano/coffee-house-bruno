import morenita from "./images/morenita.jpg";
import hispanos5 from "./images/5hispanos.jpg";
import hispanosCrema from "./images/5hispanoscrema.jpg";
import hispanosExpresso from "./images/5hispanosexpreso.jpg";
import hispanosGrano from "./images/5hispanosgrano.jpg";
import cabrales from "./images/cabrales.jpg";
import teBigBen from "./images/te-clasico-cabrales-big-ben-caja-de-100-saquitos.jpg";
import teVirginia from "./images/te-clasico-la-virginia-en-caja-de-50-saquitos-sin-sobre.jpg";
import teHebras250 from "./images/te-hebras-250.jpg";
import teHebrasDescafeinado from "./images/te-hebras-blend-descafeinado-1kg.jpg";
import teHebrasRojoVerdeNegro from "./images/te-hebras-especial-blend-negro-verde-rojo-1kg.jpg";
import teMorenita from "./images/te-morenita-50-saquitos-sin-sobre.jpg";
import nesquik from "./images/nesquik.jpg";
import chocolino from "./images/chocolino.jpg";
import nestle from "./images/nestle.jpg";
import orloc from "./images/orloc.jpg";
import azucar5Hispanos from "./images/azucar-5-hispanos.jpg";
import azucarCabrales from "./images/azucar-cabrales.jpg";
import azucarChango from "./images/azucar-chango.jpg";
import azucarLaVirginia from "./images/azucar-la-virginia.jpg";
import cafeteraSaeco from "./images/cafetera-saeco.jpg";
import cafeteraLirika from "./images/cafetera-lirika.jpg";
import cafeteraKoro from "./images/cafetera-koro.jpg";
import expendedoraCristallo from "./images/expendedora-cristallo.jpg";
import expendedoraSnack from "./images/expendedora-snack.jpg";


export const productos = [
    {
        "id":1, 
        "title":"Morenita en granos",
        "price":2334.04,
        "pictureUrl":morenita,
        "description":"Café espresso Durban Colombia, café en grano La Morenita 500g. Blend resultante de la combinación de granos de café arábigos originarios de la región. Ideal para cafeteras gastronómicas y de bar.",
        "category":"cafe",
        "stock":5
    },
    {
        "id":2,
        "title":"Cabrales expresso en granos",
        "price":2601.58,"pictureUrl":"/cabrales.jpg",
        "pictureUrl": cabrales,
        "description":"Café en grano super cabrales oro visión (violeta), especial para cafeteras espresso de oficina, empresas y hogareñas.Logrado a partir de la mezcla en partes iguales de café natural y café lavado procedentes de Brasil o Colombia.",
        "category":"cafe",
        "stock":5
    },
    {
        "id":3,
        "title":"5Hispanos grano bourbon",
        "price":6243.02,
        "pictureUrl": hispanos5,
        "description":"Café tostado natural en grano express cinco hispanos de 1kg, precio. Blend tradicional. Sabor delicado, profundo y pronunciado con un aroma fuerte y persistente. Para tomar solo o con leche.",
        "category":"cafe",
        "stock":5
    },
    {
        "id":4,
        "title":"5Hispanos tostado expresso en granos",
        "price":5571.81,
        "pictureUrl":hispanosGrano,
        "description":"Café tostado natural en grano express cinco hispanos de 1kg, precio. Blend tradicional. Sabor delicado, profundo y pronunciado con un aroma fuerte y persistente. Para tomar solo o con leche.",
        "category":"cafe",
        "stock":5
    },
    {
        "id":5,
        "title":"5Hispanos expresso bolsa",
        "price":5171.44,
        "pictureUrl":hispanosExpresso,
        "description":"Café en grano espresso clásico 5 hispanos en bolsa de 1000g, especial para cafeteras expreso de oficina, hoteles y hogares.Logrado a partir de la mezcla en partes iguales de café tostado natural y café lavado procedentes de regiones como Brasil y/o Africanos.",
        "category":"cafe",
        "stock":3
    },
    {
        "id":6, 
        "title":"5Hispanos santos crema",
        "price":6330.72, 
        "pictureUrl":hispanosCrema,
        "description":"Café en grano santos crema clásico marca 5 hispanos, especial para cafeteras espresso de oficina, empresas y hogareñas. Logrado a partir de la mezcla de variedades de café tostado natural.",
        "category":"cafe",
        "stock":5
    },
    {
        "id":7, 
        "title":"Té en Hebras Puro Blend Negro Verde o Rojo 250g",
        "price":1200.01, 
        "pictureUrl":teHebras250,
        "description":"Un té gourmet en hebras puro con blend especial. Ud. selecciona su mejor opción en te negro, verde o rojo. Un producto nacional con excelente rendimiento y un exquisito sabor. Una bolsa rinde de 90 a 125 tazas, según su intensidad.",
        "category":"te",
        "stock":5
    },
    {
        "id":8, 
        "title":"Té en Hebras Especial Blend, Negro, Verde o Rojo 1kg",
        "price":10400.00, 
        "pictureUrl":teHebrasRojoVerdeNegro,
        "description":"Un té gourmet en hebras con blends especiales. Ud. selecciona su mejor opción en te negro, verde o rojo. Cosechas especiales y premiun. Un producto nacional con excelente rendimiento y un exquisito sabor. Una bolsa rinde de 360 a 500 tazas, según su intensidad.",
        "category":"te",
        "stock":5
    },
    {
        "id":9, 
        "title":"Té en Hebras Blend Descafeinado en Bolsas de 1kg",
        "price":9280.00, 
        "pictureUrl":teHebrasDescafeinado,
        "description":"Tes descafeinados en hebras, blends importados y nacionales de origen sudafrica, entre otros. Cosechas especiales y premiun. Producto con excelente rendimiento y exquisito sabor.",
        "category":"te",
        "stock":5
    },
    {
        "id":10, 
        "title":"Te Clásico La Morenita en caja de 50 saquitos (sin sobre)",
        "price":187.73, 
        "pictureUrl":teMorenita,
        "description":"Una excelente variedad de tés ideal para todos los gustos, infusiones clásicas en saquitos de La Morenita. Se presentan en 1 caja de 50 saquitos C/u. (Sin Ensobrar).",
        "category":"te",
        "stock":5
    },
    {
        "id":11, 
        "title":"Te Clásico La Virginia en caja de 50 saquitos (sin sobre)",
        "price":217.73, 
        "pictureUrl":teVirginia,
        "description":"Una excelente variedad de tés ideal para todos los gustos, infusiones clásicas en saquitos de La Virginia. Se presentan en 1 caja de 50 saquitos C/u. (Sin Ensobrar).",
        "category":"te",
        "stock":5
    },
    {
        "id":12, 
        "title":"Té Clásico Cabrales Big Ben caja de 100 Saquitos",
        "price":698.74, 
        "pictureUrl":teBigBen,
        "description":"El té big ben está compuesto de finos tés negros tipo FNGS. Se presentan en 1 paquete de 100 saquitos comunes (Sin Ensobrar), especial para hotelería, gastronomía y  particulares.",
        "category":"te",
        "stock":5
    },
    {
        "id":13, 
        "title":"Cacao Chocolino Granulado La Virginia Bolsa de 800g",
        "price":863.07, 
        "pictureUrl":chocolino,
        "description":"Chocolate chocolino de la virginia, cacao instantáneo de 800 grs. De fácil preparación. Ideal para desayunos, meriendas y maquinas expendedoras vending. Bebida soluble tradicional.",
        "category":"cacao",
        "stock":5
    },
    {
        "id":14, 
        "title":"Cacao Nesquik Chocolatada de Nestle Bolsa de 800g",
        "price":997.04, 
        "pictureUrl":nesquik,
        "description":"Chocolate nesquik, cacao instantáneo de 800g. Elaborado por Nestle, fácil de preparar. Ideal para desayunos, meriendas y maquinas expendedoras vending. Bebida soluble tradicional, precio económico, envío a todo el país. Argentina.",
        "category":"cacao",
        "stock":5
    },
    {
        "id":15, 
        "title":"Cacao con Leche Instantáneo de Nestle Bolsa de 1kg",
        "price":1328.91, 
        "pictureUrl":nestle,
        "description":"Chocolate lacte instantáneo elaborado por Nestle. Fácil de preparar. Ideal para desayunos, meriendas y maquinas vending. Cacao en polvo con leche en bolsas de 1000g.",
        "category":"cacao",
        "stock":5
    },
    {
        "id":16, 
        "title":"Cacao en polvo Instantáneo Orloc Bolsa de 1 kg",
        "price":714.38, 
        "pictureUrl":orloc,
        "description":"Chocolatada en polvo de la marca Orloc, cacao instantáneo de 1000g. De fácil preparación. Ideal para desayunos y meriendas en todos los días. Bebida soluble tradicional.",
        "category":"cacao",
        "stock":5
    },
    {
        "id":17, 
        "title":"Azúcar 5 Hispanos caja 800 sobres individuales",
        "price":2960.34, 
        "pictureUrl":azucar5Hispanos,
        "description":"Azúcar en sobres individuales de endulzantes marca cinco hispanos, presentación en caja de 800 unidades. Venta online con envío Argentina.",
        "category":"endulzantes",
        "stock":5
    },
    {
        "id":18, 
        "title":"Azúcar La virginia en caja de 800 sobres bastones",
        "price":2762.45, 
        "pictureUrl":azucarLaVirginia,
        "description":"Azúcar La virginia en caja de 800 sobres bastones.",
        "category":"endulzantes",
        "stock":5
    },
    {
        "id":19, 
        "title":"Azucar Cabrales caja de 800 sobres individuales",
        "price":3989.54, 
        "pictureUrl":azucarCabrales,
        "description":"Azúcar cabrales endulzante individuales. Se presenta en sobres y bastones de 5g en material flexible impreso. Las Cajas contienen sobres por 800 unidades individuales.",
        "category":"endulzantes",
        "stock":5
    },
    {
        "id":20, 
        "title":"Azúcar Chango Baja Calorías en Bolsa 500g",
        "price":561.44, 
        "pictureUrl":azucarChango,
        "description":"Todo lo rico del Azúcar Refinado Chango y todo lo bueno de la Stevia. Juntos, en una cuidada combinación para que tengas, en un solo producto, el saludable bienestar. Bolsas de 500g.",
        "category":"endulzantes",
        "stock":5
    },
    {
        "id":21, 
        "title":"Cafetera Saeco Area OTC para Capsulas Nespresso o similares",
        "price":165484.80, 
        "pictureUrl":cafeteraSaeco,
        "description":"Cafetera automática para capsulas nespresso o similares. Una máquina nueva, con pantalla táctil y compacta. Cuyo ambiente ideal es la oficina o pequeños comercios. Representa, sencillez y rendimiento."+
                       "Un diseño moderno y sencillo, una elevada capacidad en sus depósitos de agua y café e increíblemente fácil de usar. Deliciosas leche recién hecha y espumosa, con su novedoro capuchinador.",
        "category":"cafeteras",
        "stock":5
    },
    {
        "id":22, 
        "title":"Cafetera Espresso Automática Lirika Black Negra",
        "price":149506.50, 
        "pictureUrl":cafeteraLirika,
        "description":"Lirika plus negra de saeco. Cafetera automática espresso. Representa, sencillez y rendimiento. Una máquina compacta cuyo ambiente ideal es el hogar, un quincho o una sala de recepción. Un diseño "+
                       "moderno y sencillo, una elevada capacidad en sus depósitos de agua y café e increíblemente fácil de usar. En la opción de café espress la Cafetera Lirika puede expender cafes de a una o dos tazas a la "+
                       "vez. Ud. podrá elegir entre Café espresso, Cappuccino, Latte y otras bebidas deliciosas.",
        "category":"cafeteras",
        "stock":5
    },
    {
        "id":23, 
        "title":"Cafetera Koro Prime Automática Expreso de Necta",
        "price":450177.00, 
        "pictureUrl":cafeteraKoro,
        "description":"Nueva cafetera Koro Prime automática expreso de Necta. Representa, sencillez y rendimiento. Una máquina compacta cuyo ambiente ideal es la oficina o pequeños comercios. Un diseño moderno y "+
                       "sencillo, una elevada capacidad en sus depósitos de agua y café e increíblemente fácil de usar. La Cafetera Koro puede expender café de a una taza. Ud. podrá elegir entre Café espresso, Cappuccino, Latte "+
                       "y otras bebidas deliciosas.",
        "category":"cafeteras",
        "stock":5
    },
    {
        "id":24, 
        "title":"Expendedora Cristallo 400 Saeco Espresso 16 Op",
        "price":809108.63, 
        "pictureUrl":expendedoraCristallo,
        "description":"Expendedora cristallo 400 evo, es una máquina vending distribuidor de bebidas calientes completamente automático, diseñado y desarrollado para reducir y optimizar las intervenciones de reposición y "+
                       "asistencia. Extremadamente funcional tiene una gran autonomía y capacidad en proporción a las dimensiones de la máquina. Está diseñada para combinarse con equipos de snack de saeco y ofrecer una "+
                       "amplia posibilidad de servicios. El cliente puede optar por hasta 16 bebidas diferentes y de forma directa. ",
        "category":"expendedoras",
        "stock":5
    },
    {
        "id":25, 
        "title":"Maquina Expendedora de Alimentos, Snack y Latas",
        "price":859960.73, 
        "pictureUrl":expendedoraSnack,
        "description":"Expendedora snack, es una nueva generación de máquinas vending de alimentos y bebidas frías. Posee 9 botones para seleccionar el producto, 6 espirales con 6 o 7 bandejas extraíbles para dispensar "+
                       "snack, bebidas en lata o botella. Con regulación de temperatura de 1° a 4° C. La gran versatilidad de sus configuraciones permite crear diferentes opciones y así poder ofrecer una gran variedad de productos. ",
        "category":"expendedoras",
        "stock":5
    }

];