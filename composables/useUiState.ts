import type { CaseStudyCategory } from '~/data/caseStudies'

type AnalyticsRange = '30d' | '90d' | 'all'
type ActivityTab = 'commits' | 'status' | 'network' | 'logs'

export function useUiState() {
  const category = useState<CaseStudyCategory>('caseCategory', () => 'all')
  const analyticsRange = useState<AnalyticsRange>('analyticsRange', () => '30d')
  const activityTab = useState<ActivityTab>('activityTab', () => 'commits')

  if (import.meta.client) {
    onMounted(() => {
      const savedTheme = localStorage.getItem('portfolio-theme')
      if (savedTheme === 'dark') document.documentElement.classList.add('dark')

      const savedCat = localStorage.getItem('portfolio-category') as CaseStudyCategory | null
      const savedRange = localStorage.getItem('portfolio-range') as AnalyticsRange | null
      if (savedCat) category.value = savedCat
      if (savedRange) analyticsRange.value = savedRange
    })

    watch(category, (v) => localStorage.setItem('portfolio-category', v))
    watch(analyticsRange, (v) => localStorage.setItem('portfolio-range', v))
  }

  return { category, analyticsRange, activityTab }
}

export function useThemeToggle() {
  const isDark = useState<boolean>('themeDark', () => false)

  const applyTheme = (dark: boolean) => {
    isDark.value = dark
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', dark)
      localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
    }
  }

  if (import.meta.client) {
    onMounted(() => {
      const savedTheme = localStorage.getItem('portfolio-theme')
      applyTheme(savedTheme === 'dark')
    })
  }

  return {
    isDark,
    toggleTheme: () => applyTheme(!isDark.value)
  }
}
