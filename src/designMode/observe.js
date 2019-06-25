class Subject {
  constructor() {
    this.Observers = [];
    this.curnum = 1;
    this.subnum = 1;
  }

  sub(observer) {
    observer.pnum = this.subnum;
    this.Observers.push(observer);
    this.subnum++;
  }

  notify() {
    this.Observers.forEach(observer => {
      observer.listen(this.curnum);
    });
    this.curnum++;
  }
}
const subject = new Subject();

const ObserverA = {
  listen(num) {
    if (num === this.pnum) {
      console.log('轮到我了');
    } else if (num < this.pnum) {
      console.log(`前面还有${this.pnum - num}`);
    }
  },
};
const ObserverB = {
  listen(num) {
    if (num === this.pnum) {
      console.log('轮到我了');
    } else if (num < this.pnum) {
      console.log(`前面还有${this.pnum - num}`);
    }
  },
};
const ObserverC = {
  listen(num) {
    if (num === this.pnum) {
      console.log('轮到我了');
    } else if (num < this.pnum) {
      console.log(`前面还有${this.pnum - num}`);
    }
  },
};
subject.sub(ObserverA);
subject.sub(ObserverB);
subject.sub(ObserverC);
subject.notify();
subject.notify();
subject.notify();
