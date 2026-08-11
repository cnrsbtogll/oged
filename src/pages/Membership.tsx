import { MembershipForm } from '../components/MembershipForm';
import { ShieldCheck, Users, HeartHandshake, Award } from 'lucide-react';

export default function Membership() {
  return (
    <>
      <section className="bg-primary text-on-primary py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            ÖGED Ailesine Katılın
          </h1>
          <p className="text-lg text-on-primary/80 max-w-2xl mx-auto leading-relaxed">
            Sektördeki haklarınızı korumak, sürekli eğitim imkanlarından yararlanmak ve dayanışma ağımızın bir parçası olmak için hemen üyelik başvurunuzu gerçekleştirin.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-outline-variant/30">
            <ShieldCheck className="text-primary flex-shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-sm text-primary">Hukuki Destek</h4>
              <p className="text-xs text-on-surface-variant">Sektörel haklarınızda rehberlik</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-outline-variant/30">
            <Award className="text-secondary flex-shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-sm text-primary">Ücretsiz Eğitimler</h4>
              <p className="text-xs text-on-surface-variant">Sertifikalı mesleki seminerler</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-outline-variant/30">
            <Users className="text-primary flex-shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-sm text-primary">İstihdam İmkânı</h4>
              <p className="text-xs text-on-surface-variant">Öncelikli iş fırsatları yönlendirmesi</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-outline-variant/30">
            <HeartHandshake className="text-secondary flex-shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-sm text-primary">Sosyal Dayanışma</h4>
              <p className="text-xs text-on-surface-variant">Üyeler arası yardımlaşma fonu</p>
            </div>
          </div>
        </div>
      </section>

      <MembershipForm />
    </>
  );
}
