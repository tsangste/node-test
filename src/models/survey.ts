interface StandardSurveyHeader {
  id: string
  title: string
}

interface SubSurveyHeader extends StandardSurveyHeader {
  subSurvey: SubSurvey
}

interface SubSurvey {
  parentId: string
  anchorId: string
}

type SurveyHeader = StandardSurveyHeader | SubSurveyHeader

interface Container extends SurveyItem{
  children: SurveyItem[]
}

interface SurveyItem {
  header: SurveyHeader
}

export interface Survey {
  header: SurveyHeader
  children: Container[]
}
