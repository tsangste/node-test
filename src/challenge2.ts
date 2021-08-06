import { nanoid } from 'nanoid'

import { Survey } from './models/survey'

export function cloneSurvey(survey: Survey) {
  function refreshIds(survey, reference = {}) {
    if (survey) {
      Object.getOwnPropertyNames(survey).map(p => {
        if (typeof survey[p] === 'object') {
          if (Array.isArray(survey[p])) {
            survey[p].map(obj => refreshIds(obj, reference))
          } else {
            refreshIds(survey[p], reference)
          }
        } else if (p === 'id') {
          reference[survey[p]] = nanoid()
          survey[p] = reference[survey[p]]
          if (survey?.subSurvey?.anchorId) {
            survey.subSurvey.anchorId = reference[survey.subSurvey.anchorId] || survey.subSurvey.anchorId
          }
        }
      })

      return survey
    }
  }

 // Do a lazy deep clone
 const clone = JSON.parse(JSON.stringify(survey))

 return refreshIds(clone)
}