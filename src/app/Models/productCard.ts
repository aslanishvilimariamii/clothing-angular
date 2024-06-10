export class ProductCard{
    constructor(
        public photo: string,
        public title: string,
        public description: string,
        public price: string,
        public colors: string[]
    ) {}
}