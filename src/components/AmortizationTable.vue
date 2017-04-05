<template>
<table class="table table-sm table-responsive">
    <thead>
      <tr>
        <th>#</th>
        <th>Base</th>
        <th>Principal</th>
        <th>Interest</th>
        <th>Total Payment</th>
        <th>Balance</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data">
        <td>{{ index + 1 }}</td>
        <td>{{ item.base }}</td>
        <td>{{ item.principal }}</td>
        <td>{{ item.interest }}</td>
        <td>{{ item.interest + item.principal }}</td>
        <td>{{ item.balance }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'AmortizationTable',
  props:[ 'data'],
}
</script>

<style lang="scss">

</style>