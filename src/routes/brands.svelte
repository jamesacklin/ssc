<script>
  let brands = [
    {
      name: "Cervélo",
      description: "Cervélo racing and performance bicycles",
      logo: "cervelo.svg"
    },
    {
      name: "Scott",
      description: "Scott bicycles and Syncros accessories",
      logo: "scott.svg"
    },
    {
      name: "Sidi",
      description: "Sidi cycling footwear, made in Italy",
      logo: "sidi.svg"
    },
    {
      name: "Assos",
      description: "Assos of Switzerland clothing",
      logo: "assos.png"
    },
    {
      name: "Zipp",
      description: "Zipp wheels, equipment, and service",
      logo: "zipp.svg"
    },
    {
      name: "Campagnolo",
      description: "Campagnolo drivetrains and certified service",
      logo: "campagnolo.svg"
    },
    {
      name: "Shimano",
      description: "Shimano drivetrains, accessories, clothing, and service",
      logo: "shimano.svg"
    },
    {
      name: "SRAM",
      description: "SRAM drivetrains and service",
      logo: "sram.svg"
    },
    {
      name: "Quarq",
      description: "Quarq power meters, accessories, and service",
      logo: "quarq.png"
    },
    {
      name: "Look",
      description: "Look pedals, cleats, and accessories",
      logo: "look.svg"
    },
    {
      name: "Wahoo",
      description: "Wahoo smart trainers and cycling computers",
      logo: "wahoo.png"
    },
    {
      name: "Tacx",
      description: "Tacx smart trainers",
      logo: "tacx.svg"
    },
    {
      name: "Skratch Labs",
      description: "Skratch Labs nutrition and hydration products",
      logo: "skratch.svg"
    }
  ];
</script>

<svelte:head>
  <title>Brands We Carry</title>
</svelte:head>

<section class="mw7 ph3 pt4 center">
  <h1 class="f1">Brands We Carry</h1>
  <ul class="list pa0">
    {#each brands as { name, description, logo }, i}
      <li class="pa0 mt6 mb6">
        <img src="/logos/{logo}" alt={description} loading="lazy" />
      </li>
    {/each}
  </ul>
</section>
