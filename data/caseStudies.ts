export type CaseStudyCategory = 'all' | 'architecture' | 'opensource' | 'fullstack'

export type CaseStudy = {
  id: string
  title: string
  eyebrow: string
  tags: string[]
  problem: string
  solution: string
  impactLabel: string
  impactValue: string
  categories: CaseStudyCategory[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'neural-sync',
    title: 'Neural-Sync Core',
    eyebrow: 'Live Deployment // V2.4',
    tags: ['RUST', 'GRPC'],
    problem: 'High-frequency data contention across 128 distributed nodes causing consistency lag.',
    solution: 'Lock-free actor model using sharded atomic buffers and ring-buffer propagation.',
    impactLabel: 'System Impact',
    impactValue: 'Reduced latency by 42%',
    categories: ['all', 'architecture', 'fullstack']
  },
  {
    id: 'vault-stream',
    title: 'Vault.Stream',
    eyebrow: 'Open Source // v1.0.4',
    tags: ['GO', 'K8S'],
    problem: 'Centralized secrets management creating a single point of failure in CI/CD.',
    solution: 'Decentralized sidecar injection with zero-knowledge proof verification.',
    impactLabel: 'System Impact',
    impactValue: 'Zero-Downtime Deployment',
    categories: ['all', 'opensource', 'fullstack']
  },
  {
    id: 'solaris',
    title: 'Solaris Mesh Network',
    eyebrow: 'Complex Infrastructure // Case Study',
    tags: ['ELIXIR', 'KAFKA', 'AWS BARE-METAL'],
    problem:
      'Processing 1.2M telemetry events per second across non-reliable satellite links with zero data loss requirement.',
    solution:
      'Built a custom backpressure orchestration layer on top of OTP/GenStage with tiered disk-persisted queues.',
    impactLabel: 'Data Throughput',
    impactValue: '1.2M events/sec',
    categories: ['all', 'architecture']
  }
]
