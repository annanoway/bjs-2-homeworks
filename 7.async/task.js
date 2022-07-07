class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (isNaN(id)) {
            throw new Error('error text')
        }
        try {
            if (this.alarmCollection.find(item => item.id === id) !==undefined)  {
            console.error('такой звонок уже существует');
        } else {
            return this.alarmCollection.push({id, time, callback});
            }
        }
        catch(error) {
            return error
        }
    }

    removeClock(id) {
        let length = this.alarmCollection.length
        let remove = this.alarmCollection.filter((item) => item.id !== id)
        this.alarmCollection = remove
        return length > remove
        // остается массив звонков без звонка с переданным id, возвращается булево
    }

     getCurrentFormattedTime() {
        const time = new Date()
        const hours = time.getHours()
        const minutes = time.getMinutes()

        let formattedTime = (value) => {
                if (value < 10) {
                    return "0" + value
                } else
                return value
            }
        return formattedTime(hours) + ':' + formattedTime(minutes)
    }

        start() {
            let checkClock = (alarm) => {
                if (alarm.time === this.getCurrentFormattedTime()) {
                    return alarm.callback();
                }
            }
            if (this.timerId === null) {
                this.timerId = setInterval(() => {
                    this.alarmCollection.forEach(alarm => checkClock(alarm));
                }, 1000);
            }
            return;
        }

        stop() { 
            if(this.timerId !== null) {
                clearInterval(this.timerId);
                this.timerId = null;
            }
        } 
    
        printAlarms() {
            this.alarmCollection.forEach(item => console.log(item.id + ': ' + item.time));
        }
    
        clearAlarms() {
            this.stop();
            this.alarmCollection = [];
        } 
}


function testCase() {
    let testAlarmClock = new AlarmClock
    testAlarmClock.addClock('06:00', () => console.log ('Будильник №1'), 1);
    testAlarmClock.addClock('06:10', () => console.log ('Будильник №2'), 2);
    testAlarmClock.addClock('06:20', () => console.log ('Будильник №3'), 3);
    testAlarmClock.addClock('06:30', () => console.log ('Будильник №4'), 4);
    testAlarmClock.printAlarms();
    testAlarmClock.removeClock(4);
    testAlarmClock.printAlarms();
    testAlarmClock.addClock('07:00', () => {
        testAlarmClock.stop();
        console.log ('Будильник номер раз');
        }, 5);
        testAlarmClock.printAlarms();

}



        



