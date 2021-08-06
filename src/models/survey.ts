interface Header {
  id: string
  title: string
  link?: link
}

interface link {
  parentId: string
  anchorId: string
}

interface Container extends SurveyItem {
  children: SurveyItem[]
}

interface SurveyItem {
  header: Header
}

export interface Survey {
  _id: string
  header: Header
  children: Container[]
}
