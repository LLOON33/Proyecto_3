import {browser, element, by} from 'protractor';

describe ('mi prueba', ()=>{
    browser.get("/");
});

//prueba 1
it("el page soldadura se debe mostrar por defecto", ()=>{
    expect(element(by.css(".titulo ion-card-title")).getText()).toContain("Soldadura Tipo MIG/MAG")
})

//prueba 2
it("el page de acero se debe mostrar lo siguiente", ()=>{
    expect(element(by.css(".pagina_titulo ion-card.tittle")).getText()).toContain("Tipos De Aceros")
})