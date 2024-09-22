<template>
  <header class="mt-[10px] grow flex">
    <div>
      <p style="color:grey">Bienvenue Antonin,</p>
      <h1>Tableau de bord</h1>
    </div>
    <div class="ml-auto"> <!-- Ajout de la classe ml-auto -->
      <UiLogo/>
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
          :data="data"
          :colors="['#f96d6d', '#f1b24b', '#6d6087']"
          :show-legend="true"
          :type="'pie'"
        />
      </UiDashboardCard>
    </div>

    <!-- Right column card -->
    <div class="right-column">
      <UiDashboardCard title="Évolution sur l'année">
        <AreaChart
          :data="areadata"
          index="name"
          :categories="['total']"
          :colors="['blue']"
          :show-legend="true"
          :yFormatter="(value) => value + ' points'"
        />
      </UiDashboardCard>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { colors } from '@unovis/ts';
import { PieChart } from 'lucide-vue-next';
import AreaChart from '~/components/ui/chart-area/AreaChart.vue';
import DonutChart from '~/components/ui/chart-donut/DonutChart.vue';

const progress = ref(0);

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = 66), 500);
  cleanupFn(() => clearTimeout(timer));
});

const data = [
  { name: 'Squat', total: 100 },
  { name: 'Bench', total: 80 },
  { name: 'Deadlift', total: 120 },
];

const areadata = [
  { name: 'Janvier', total: 150 },
  { name: 'Février', total: 160 },
  { name: 'Mars', total: 170 },
  { name: 'Avril', total: 180 },
  { name: 'Mai', total: 200 },
  { name: 'Juin', total: 210 },
  { name: 'Juillet', total: 220 },
  { name: 'Août', total: 230 },
  { name: 'Septembre', total: 240 },
  { name: 'Octobre', total: 250 },
  { name: 'Novembre', total: 260 },
  { name: 'Décembre', total: 270 },
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
