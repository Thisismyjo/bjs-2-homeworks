class AlarmClock {
    constructor (alarmCollection, intervalId) {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {        
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.find((alarm) => alarm.id === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }       

        this.alarmCollection.push({time, callback, canCall: true});
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time)
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5); 
    }    

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                } else if (alarm.time !== this.getCurrentFormattedTime()) {
                    alarm.canCall = true;
                }
            }), 1000) ;
        }
        
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        return this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        return this.alarmCollection = [];
    }
}