export const rndItems = [
    {
        id: 1,
        title: "about",
        label: "R&D 지원프로그램 안내",
        path: "/about",
    },
    {
        id: 2,
        title: "kinsdb",
        label: "심층처분 데이터베이스",
        dropdown: [
            {
                id: 1,
                title: "dbIndex",
                label: "데이터베이스 개요",
                path: "/kinsdb",
            },
            {
                id: 2,
                title: "brnc",
                label: "규제기준 관련",
                path: "/brnc",
            },
            {
                id: 3,
                title: "unist",
                label: "규제사례 관련",
                path: "/unist",
            },
        ]
    },
    {
        id: 3,
        title: "geodart",
        label: "GeoDART 프로젝트",
        dropdown: [
            {
                id: 1,
                title: "GeodartReport",
                label: "GeoDart 보고서",
                path: "/",
            },
            {
                id: 1,
                title: "fepList",
                label: "FEP 목록",
                path: "/fepdb",
            },
            {
                id: 1,
                title: "logtermSystem",
                label: "장기 시스템 분석",
                path: "/",
            },
            {
                id: 1,
                title: "tspaModel",
                label: "TSPA 모델",
                path: "/",
            },            
        ]
    },
    {
        id: 4,
        title: "regulation",
        label: "규제 정보 제공",
        path: "/regulation",
    },
    {
        id: 5,
        title: "institute",
        label: "기관 소개",
        path: "/institute",
    },
]