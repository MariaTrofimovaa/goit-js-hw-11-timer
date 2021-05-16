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

  updateTime() {
    setInterval(() => {
      this.startTime = new Date();
      this.endTime = this.targetDate - this.startTime;

      this.days = Math.floor(this.endTime / (1000 * 60 * 60 * 24));
      this.hours = pad(
        Math.floor((this.endTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      this.mins = pad(
        Math.floor((this.endTime % (1000 * 60 * 60)) / (1000 * 60)),
      );
      this.secs = pad(Math.floor((this.endTime % (1000 * 60)) / 1000));

      this.refs.days.textContent = `${this.days}`;
      this.refs.hours.textContent = `${this.hours}`;
      this.refs.mins.textContent = `${this.mins}`;
      this.refs.secs.textContent = `${this.secs}`;
    }, 1000);

    const pad = value => String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 11, 2021'),
});
timer.updateTime();
