
export class CustomerViewModel {
    public customerId: number;
    public customerName: string;
    public contactNumber: string;
    public customerEmailId: string;
    public customerAddress: string;
}

export interface ApiResponse {
    isValid: boolean;
    statusMessage: string;
    errorMessage: string;
    result: any;
}