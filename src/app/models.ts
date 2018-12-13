import { HttpHeaders } from "@angular/common/http";

export class schoolCount {
    IsChecked: boolean;
    name: string;
    amount: number;
}

export class theOther {
    IsChecked: boolean;
    name: string;
    description: string;
}

export class unitModel {
    roomNumber: string;
    access: any;
}

export class setPassword {
    _idqr: string;
    idUser: string;
    password: string;
    name: string;
    email: string;
}

export class GlobalVarible {
    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}
