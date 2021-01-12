
    export interface Doors{
        doors: boolean;
    }

    export abstract class Car{
        constructor(public readonly brand: string, year: Date){
            this.brand = brand;
            this.Year= year.getFullYear();
        };

        protected Year: number;
        
        public getBrand():string{
            return this.brand;
        }
        public getYear():number{
            return this.Year;
        }
        abstract faster(): void;
        abstract slower(): void;
    }

