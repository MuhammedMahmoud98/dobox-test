import { APIs } from "./../constants/apis";
import { environment } from "./../../../environments/environment";
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpHeaders,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { isPlatformBrowser } from "@angular/common";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    isBrowser;
    constructor(
        private cookies: CookieService,
        @Inject(PLATFORM_ID) private platformId: any
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const url = request.url;

        const JsEncryptModule = require("jsencrypt");
        const encrypt = new JsEncryptModule.JSEncrypt({ default_key_size: 2048 });
        encrypt.setPublicKey(environment.ENCRYPTION_PUBLIC_KEY);
        if (
            !(
                url.includes(APIs.ATTACHMENTS_HOST) ||
                url.includes(APIs.ATTACHMENTS_HOST_2)
            )
        ) {
            if (url.includes("public")) {
                request = request.clone({
                    headers: new HttpHeaders({
                        "Content-Type": "application/json",
                        "API-CLIENT": encrypt.encrypt(
                            environment.API_CLIENT + ";" + new Date().toUTCString()
                        ),
                        "Accept-Language": this.cookies.get("lang"),
                        "API-DATE": new Date().toUTCString(),
                        Agent: "web",
                    }),
                });
            } else {
                request = request.clone({
                    setHeaders: {
                        "Content-Type": "application/json",
                        "API-CLIENT": encrypt
                            .encrypt(environment.API_CLIENT + ";" + new Date().toUTCString())
                            .trim(),
                        Authorization: url.includes(APIs.MYGATE_HOST)
                            ? this.getMygateGateAuthToken()
                            : "Bearer " + this.cookies.get("token"),
                        "Accept-Language": this.cookies.get("lang"),
                        "API-DATE": new Date().toUTCString(),
                        Agent: "web",
                    },
                });
            }
        }
        return next.handle(request);
    }

    getMygateGateAuthToken(): any {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.getItem("myGateToken")
                ? localStorage.getItem("myGateToken")
                : "";
        }
    }
}
