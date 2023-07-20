<script>
    let count = 0;
  
    function increment() {
      count += 1;
    }
  
    function decrement() {
      count -= 1;
    }
</script>

<main>
  <h2>Counter: {count}</h2>
  <button on:click={increment}>Increment</button>
  <button on:click={decrement}>Decrement</button>
</main>