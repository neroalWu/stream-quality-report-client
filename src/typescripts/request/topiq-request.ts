export class TopiqRequest {
    constructor(
        public region: string = '',
        public streamType: string = '',
        public bitrateType: string = ''
    ) {}
}