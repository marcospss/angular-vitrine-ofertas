export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(`${moduleName} já foi carregado. Importe os módulos principais apenas no AppModule.`);
    }
}
