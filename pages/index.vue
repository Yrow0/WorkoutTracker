<template>
  <header class="mt-[10px] grow flex">
    <div v-if="data">
    Hello {{ data }}!
  </div>
  <div v-else>
    You are not logged in.
  </div>
  </header>
  <div class="dashboard-grid gap-4">
    <!-- Left column cards -->
    <div class="grid gap-4">
      <UiDashboardCard title="Séance dans la semaine" description="3/4">
        <UiProgress v-model="progress"/>
        <UiButton variant="outline" size="icon" class="right-0">
          <Icon name="ri:add-line"/>
          
        </UiButton>
      </UiDashboardCard>

      <UiDashboardCard title="Total SBD">
        <DonutChart
          index="name"
          :category="'total'"
          :data="datas"
          :colors="['#E91E63', '#FFC107', '#3F51B5']"
          :show-legend="true"
          :type="'pie'"
        />
      </UiDashboardCard>
    </div>

    <!-- Right column card -->
    <div class="right-column" >
      <UiDashboardCard title="Évolution sur l'année">
        <AreaChart
          :data="areadata"
          index="name"
          :categories="['total','bench','squat','deadlift']"
          :colors="['#00BFA5','#FFC107','#E91E63','#3F51B5']"
          :show-legend="true"
        />
      </UiDashboardCard>
    </div>
  </div>
</template>


<script lang="ts" setup>
import AreaChart from '~/components/ui/chart-area/AreaChart.vue';
import DonutChart from '~/components/ui/chart-donut/DonutChart.vue';

const { status, data } = useAuthState()

console.log('Session data: ', data)

const progress = ref(0);

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = 66), 500);
  cleanupFn(() => clearTimeout(timer));
});

function test()
{
  console.log("test");
}

const datas = [
  { name: 'Squat', total: 100 },
  { name: 'Bench', total: 80 },
  { name: 'Deadlift', total: 120 },
];

const areadata = [
  { name: 'Janvier', total: 300, squat: 120, bench: 100, deadlift: 80 },
  { name: 'Février', total: 310, squat: 125, bench: 105, deadlift: 80 },
  { name: 'Mars', total: 320, squat: 130, bench: 110, deadlift: 80 },
  { name: 'Avril', total: 330, squat: 135, bench: 115, deadlift: 80 },
  { name: 'Mai', total: 340, squat: 140, bench: 120, deadlift: 80 },
  { name: 'Juin', total: 350, squat: 145, bench: 125, deadlift: 80 },
  { name: 'Juillet', total: 360, squat: 150, bench: 130, deadlift: 80 },
  { name: 'Août', total: 370, squat: 155, bench: 135, deadlift: 80 },
  { name: 'Septembre', total: 380, squat: 160, bench: 140, deadlift: 80 },
  { name: 'Octobre', total: 390, squat: 165, bench: 145, deadlift: 80 },
  { name: 'Novembre', total: 400, squat: 170, bench: 150, deadlift: 80 },
  { name: 'Décembre', total: 410, squat: 175, bench: 155, deadlift: 80 },
];
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 2fr; /* Left column (3 cards), right column (1 card) */
  gap: 1rem; /* Spacing between columns */
}

.right-column {
  display: flex;
  flex-direction: column;
}
</style>
