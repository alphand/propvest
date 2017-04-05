<template>
<div class="container">
  <div class="row">
    <div class="col">
      <h2>Simple Loan Calculator</h2>
    </div>
  </div>

  <div class="row">
    <div class="col-3 col-md-3">
      <form action="">

        <div class="form-group">
          <label for="">Loan amount:</label>
          <input type="number" class="form-control" v-model.number="amount" />
        </div>

        <div class="form-group">
          <label for="">Loan period:</label>
          <input type="number" class="form-control" v-model.number="period"/>
        </div>

        <div class="form-group">
          <label for="">Interest Rate:</label>
          <input type="number" class="form-control" v-model.number="interest"/>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary" v-on:click.prevent="calculate()">Calculate</button>
        </div>
      </form>

    </div>


    <div class="col-3 col-md-9">
      <h4>Number of installment</h4>
 
      <div>
        <h6>Summary</h6>
        <ul>
          <li>
            Total Payment: {{ paymentSum }}
          </li>
          <li>
            Total Interest: {{ interestSum }}
          </li>
          <li>
            Total Principal: {{ principalSum }}
          </li>
        </ul>
      </div>
      
    </div>
  </div>

</div>
</template>

<script>
import finance from 'loancalculator';

export default {
  data () {
    return {
      amount: 0,
      period: 0,
      interest: 0,
      breakdown:[],
      paymentSum: 0,
      principalSum: 0,
      interestSum: 0,
      pandiSum: 0,
    }
  },
  methods:{
    calculate () {
      var mths = this.period * 12;

      this.breakdown = [];
      
      var principalSum = 0;
      var pandiSum = 0;
      var interestSum = 0;
      var baseSum = this.amount;

      const irate = (this.interest/100) / 12;
      const numPer = this.period * 12;

      const amortization = finance.AMORTIZE(irate, numPer, this.amount, 0, 0);
      this.breakdown = amortization.schedule;
      this.principalSum = amortization.summary.totalPrincipal;
      this.interestSum = amortization.summary.totalInterest;
      this.paymentSum = amortization.summary.totalPayment;
    }
  }
}
</script>