
export class ProductViewModel {
    public productId: number;
    public productName: string;
    public productPrice: number;
    public productColor: string;
    public productSize: string;
}

export interface ApiResponse {
    isValid: boolean;
    statusMessage: string;
    errorMessage: string;
    result: any;
}