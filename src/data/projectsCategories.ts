interface ProjectCategory {
  id: string;
  key: string;
  title: string;
  description?: string;
  tags?: string[];
  link: string;
  videoCount?: number;
  image?: string;
}
export const projectCategories: ProjectCategory[] = [
  {
    id: 'real-estate',
    key: 'realEstate',
    title: 'Real Estate',
    description: 'تصميمات معمارية وواجهات عقارية مبتكرة',
    tags: ['تصميم معماري', 'واجهات', 'ديكور داخلي'],
    link: '/projects/real-estate',
    videoCount: 12,
    image: 'https://res.cloudinary.com/driyz3pac/image/upload/v1771017629/Caver_so3epa.png' 
  },
  {
    id: 'commercial',
    key: 'commercial',
    title: 'Commercial & Retail Brands',
    description: 'تصميمات تجارية لجذب العملاء',
    tags: ['محلات تجارية', 'مراكز تسوق', 'مطاعم'],
    link: '/projects/commercial',
    videoCount: 29,
    image: 'https://res.cloudinary.com/driyz3pac/image/upload/v1771017873/caver_vgfy5x.png'
  },
  {
    id: 'industrial',
    key: 'industrial',
    title: 'Industrial',
    description: 'تصميمات لمصانع ومنشآت صناعية',
    tags: ['مصانع', 'مستودعات', 'مناطق إنتاج'],
    link: '/projects/industrial',
    videoCount: 3,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=2070&q=80'
  },
  {
    id: 'medical',
    key: 'medical',
    title: 'Medical',
    description: 'تصميمات لمستشفيات وعيادات طبية',
    tags: ['مستشفيات', 'عيادات', 'مراكز علاجية'],
    link: '/projects/medical',
    videoCount:14,
    image: 'https://res.cloudinary.com/driyz3pac/image/upload/v1771018083/caver_lddsog.png'
  },
  {
    id: 'corporate',
    key: 'corporate',
    title: 'Corporate',
    description: 'تصميمات لمقرات الشركات والمكاتب',
    tags: ['مكاتب', 'شركات', 'غرف اجتماعات'],
    link: '/projects/corporate',
    videoCount: 7,
    image: 'https://res.cloudinary.com/driyz3pac/image/upload/v1771018135/caver_xyei69.png'
  },
  {
    id: 'motion',
    key: 'motion',
    title: 'Motion Graphics',
    description:"",
    link: '/projects/motion',
    videoCount: 10,
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];