//% color=#0fbc11 icon="\u2611" block="poitch"
namespace poitch {

    export enum poitchType{
            //% block=poitch2
            poitch2=2,
            //% block=poitch3
            poitch3=3
        };
    export enum poitchSW{
            //% block=p8
            p8=8,
            //% block=p12
            p12=12,
            //% block=p13
            p13=13,
            //% block=p16
            p16=16
        };
    
    let initFlag = 0;
    let pType=3;

    /**
     * set poitch type
     * @param pType poitch type
     */
    //% block="initPoitch %pType"
    export function initPoitch(pt:poitchType): void {
        pType = pt;

        if (pType==poitchType.poitch2){
            pins.digitalWritePin(DigitalPin.P2, 1);
        }
        pins.setPull(DigitalPin.P8, PinPullMode.PullDown);
        pins.setPull(DigitalPin.P12, PinPullMode.PullDown);
        pins.setPull(DigitalPin.P13, PinPullMode.PullDown);
        pins.setPull(DigitalPin.P16, PinPullMode.PullDown);
        initFlag=1;
    }
    /**
     * get switch data
     * @param sw test pin of switch
     */
    //% blockId=testSwitch block="test switch at|%sw"
    export function testSwitch(sw : poitchSW): boolean {
        let wsw:number;
    
		if (initFlag == 0){
			initPoitch(pType);
		}

        if (sw==poitchSW.p8) wsw = pins.digitalReadPin(DigitalPin.P8)
        if (sw==poitchSW.p12) wsw = pins.digitalReadPin(DigitalPin.P12)
        if (sw==poitchSW.p13) wsw = pins.digitalReadPin(DigitalPin.P13)
        if (sw==poitchSW.p16) wsw = pins.digitalReadPin(DigitalPin.P16)

        if (wsw==1){
            return true;
        } else {
            return false;
        }
    }
}
