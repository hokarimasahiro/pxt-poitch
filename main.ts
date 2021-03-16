//% color=#0fbc11 icon="\u2611" block="poitch"
namespace poitch {

    export enum poitchType{
        //% block=poitch2
        poitch2=2,
        //% block=poitch3
        poitch3=3,
        //% block=poitch4
        poitch4=4,
        //% block=poitch5
        poitch5=5
    }
    let initFlag = 0;
    let pType=2;

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
        if ((pType==poitchType.poitch2) || (pType==poitchType.poitch3)){
            pins.setPull(DigitalPin.P8, PinPullMode.PullDown);
            pins.setPull(DigitalPin.P12, PinPullMode.PullDown);
            pins.setPull(DigitalPin.P13, PinPullMode.PullDown);
            pins.setPull(DigitalPin.P16, PinPullMode.PullDown);
        } else{
            pins.setPull(DigitalPin.P8, PinPullMode.PullUp);
            pins.setPull(DigitalPin.P12, PinPullMode.PullUp);
            pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
            pins.setPull(DigitalPin.P16, PinPullMode.PullUp);
        }
        initFlag=1;
    }
    /**
     * get switch data
     * @param sw test pin of switch
     */
    //% blockId=testSwitch block="test switch at|%sw"
    export function testSwitch(sw : DigitalPin): boolean {
		if (initFlag == 0){
			initPoitch(pType);
		}

        if ((pType==poitchType.poitch2) || (pType==poitchType.poitch3)){
            if (pins.digitalReadPin(sw)==1){
                return true;
            } else {
                return false;
            }
        } else{
            if (pins.digitalReadPin(sw)==0){
                return true;
            } else {
                return false;
            }
        }
    }
}
