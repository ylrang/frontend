import axios from "axios";

export const BrncGer = () => {
  return (
    <div class="mt-4">
      <div>
        <h5 class="sector-title">독일 원자력 관련 법령 체계도</h5>
        <div class="row">
          <div class="col-lg-6">
            <img src="assets/images/brnc/ger_laws.png" alt="Image" class="laws" />
          </div>
          <div class="col-lg-6">
            <ul class="summary">
              <li>독일은 연방제 국가이며, 독일연방환경부 (BMU), 독일연방방사선방호청 (Federal Office for Radiation Protection) 등의 기관이 원자력·방사선 안전에 관한 규제를 담당하고 있다.
                독일은 기본법 (Basic Law, GG) 및 원자력 에너지법 (Atomic Energy Act, Atg)을 토대로 원자력안전 규제요건을 수립하고 있다. </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">독일 심층처분 관련 주요 규제요건</h5>
          <table class="table table-bordered mb-0" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th class="bg-light" style={{ width: "10%" }}>분류</th>
              <th class="bg-light" style={{ width: "40%" }}>명칭</th>
              <th class="bg-light" style={{ width: "50%" }}>주요내용</th>
            </tr>
          </thead>
          <tbody>
           <tr>
              <td class="text-center" rowspan="3" style={{ width: "10%" }}>법</td>
              <td>기본법</td>
              <td>원자력 이용과 관련된 모든 사항에 적용되는 기본 원칙</td>
            </tr>
            <tr>
              <td>원자력 에너지 법</td>
              <td>방사성물질과 방사성물질 이용으로 인해 발생하는 위험으로부터 인간 및 환경을 보호하기 위한 원자력시설의 건설, 운영, 해체 등과 관련된 규제요건</td>
            </tr>
            <tr>
              <td>처분시설 부지 선정에 관한 법</td>
              <td>방폐물 및 사용후핵연료 처분시설 부지 선정에 관한 규제요건</td>
            </tr>
            <tr>
              <td class="text-center" style={{ width: "10%" }}>조례</td>
              <td>방사선방호 조례</td>
              <td>원자력시설의 운영 및 사고로 인해 발생할 수 있는 방사선학적 영향에 대한 규제요건</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="2" style={{ width: "10%" }}>주요규정</td>
              <td>발열방폐물의 최종처분에 관한 규정</td>
              <td>발열방폐물의 최종처분과 관련된 규제요건</td>
            </tr>
            <tr>
              <td>방폐물의 광산 최종처분시 안전 요건</td>
              <td>방폐물을 광산에 처분하기 위한 안전 요건</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">독일 심층처분시스템 개발 주요 연혁</h5>
        <ul>
          <li>`17년, 부지선정에 관한 법 (StandAG) 개정을 통해 부지 선정 절차 착수</li>
          <li>`19년, 지질 조건에 알맞은 후보 부지 선정 과정 시작</li>
          <li>`20년, 후보 부지에 대한 조사 결과 요약 보고서 제출</li>
          <li>`22년, 처분시설 부지 선정 (예정)</li>
          <li>`31년, 건설 인·허가 (예정)</li>
          <li>`35년, 심층처분시설 착공 (예정)</li>
        </ul>
      </div>

    </div>
  )
}