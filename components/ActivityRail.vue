<script setup lang="ts">
const { activityTab } = useUiState()

const tabs = ['commits', 'status', 'network', 'logs'] as const
const feeds = {
  commits: [
    { meta: 'COMMIT: 7ae91c0', time: '2M AGO', body: 'feat: concurrent worker pool for stream processing' },
    { meta: 'PR: #452', time: '1H AGO', body: 'merged: core architecture redesign (alpha)' }
  ],
  status: [{ meta: 'CLUSTER', time: 'LIVE', body: 'Node Cluster 04: 99.98% efficiency' }],
  network: [{ meta: 'LATENCY', time: '4MS', body: 'Edge POP — fra1 ↔ iad1' }],
  logs: [{ meta: 'AUTH', time: 'NOW', body: 'Access granted to secure-archive-v2' }]
}
</script>

<template>
  <aside class="fixed right-0 top-0 z-40 hidden h-full w-80 flex-col border-l border-primary/10 bg-surface-container-low xl:flex">
    <div class="border-b border-surface p-6 xl:mt-20">
      <h3 class="font-headline text-sm font-bold tracking-tight text-secondary">Activity Stream</h3>
      <p class="font-mono text-[10px] uppercase tracking-widest text-primary/40">Real-time technical updates</p>
    </div>
    <div class="space-y-1 p-2 font-mono text-xs">
      <button
        v-for="tab in tabs"
        :key="tab"
        type="button"
        class="flex w-full items-center gap-3 rounded-md px-4 py-3 text-left transition-colors"
        :class="activityTab === tab ? 'border-l-2 border-secondary bg-secondary/10 text-secondary' : 'text-primary/40 hover:bg-primary/5'"
        @click="activityTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="space-y-6 p-6">
      <div v-for="row in feeds[activityTab]" :key="row.meta + row.time" class="space-y-2">
        <div class="flex justify-between text-[10px] text-primary/30"><span>{{ row.meta }}</span><span>{{ row.time }}</span></div>
        <p class="text-sm text-primary/80">{{ row.body }}</p>
      </div>
    </div>
  </aside>
</template>
