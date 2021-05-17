class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      days: document.querySelector('[data-value = days]'),
      hours: document.querySelector('[data-value = hours]'),
      mins: document.querySelector('[data-value = mins]'),
      secs: document.querySelector('[data-value = secs]'),
    };
  }

  startTimer() {
    setInterval(() => {
      this.startTime = new Date();
      this.endTime = this.targetDate - this.startTime;

      this.timeTransform(this.endTime);
    }, 1000);
  }

  timeTransform(time) {
    const pad = value => String(value).padStart(2, '0');

    this.days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    this.changeTimer(this.days, this.hours, this.mins, this.secs);
  }

  changeTimer(days, hours, mins, secs) {
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 11, 2021'),
});
timer.startTimer();
