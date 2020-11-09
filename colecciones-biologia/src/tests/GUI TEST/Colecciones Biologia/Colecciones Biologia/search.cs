﻿///////////////////////////////////////////////////////////////////////////////
//
// This file was automatically generated by RANOREX.
// DO NOT MODIFY THIS FILE! It is regenerated by the designer.
// All your modifications will be lost!
// http://www.ranorex.com
//
///////////////////////////////////////////////////////////////////////////////

using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Drawing;
using System.Threading;
using WinForms = System.Windows.Forms;

using Ranorex;
using Ranorex.Core;
using Ranorex.Core.Testing;
using Ranorex.Core.Repository;

namespace Colecciones_Biologia
{
#pragma warning disable 0436 //(CS0436) The type 'type' in 'assembly' conflicts with the imported type 'type2' in 'assembly'. Using the type defined in 'assembly'.
    /// <summary>
    ///The search recording.
    /// </summary>
    [TestModule("a11d5399-152c-409e-8af8-7315ae91eb44", ModuleType.Recording, 1)]
    public partial class search : ITestModule
    {
        /// <summary>
        /// Holds an instance of the Colecciones_BiologiaRepository repository.
        /// </summary>
        public static Colecciones_BiologiaRepository repo = Colecciones_BiologiaRepository.Instance;

        static search instance = new search();

        /// <summary>
        /// Constructs a new instance.
        /// </summary>
        public search()
        {
        }

        /// <summary>
        /// Gets a static instance of this recording.
        /// </summary>
        public static search Instance
        {
            get { return instance; }
        }

#region Variables

#endregion

        /// <summary>
        /// Starts the replay of the static recording <see cref="Instance"/>.
        /// </summary>
        [System.CodeDom.Compiler.GeneratedCode("Ranorex", global::Ranorex.Core.Constants.CodeGenVersion)]
        public static void Start()
        {
            TestModuleRunner.Run(Instance);
        }

        /// <summary>
        /// Performs the playback of actions in this recording.
        /// </summary>
        /// <remarks>You should not call this method directly, instead pass the module
        /// instance to the <see cref="TestModuleRunner.Run(ITestModule)"/> method
        /// that will in turn invoke this method.</remarks>
        [System.CodeDom.Compiler.GeneratedCode("Ranorex", global::Ranorex.Core.Constants.CodeGenVersion)]
        void ITestModule.Run()
        {
            Mouse.DefaultMoveTime = 300;
            Keyboard.DefaultKeyPressTime = 20;
            Delay.SpeedFactor = 1.00;

            Init();

            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'GettingStartedWithRanorexStudioRa.ColeccionBiologiaUVG' at 96;0.", repo.GettingStartedWithRanorexStudioRa.ColeccionBiologiaUVGInfo, new RecordItemIndex(0));
            repo.GettingStartedWithRanorexStudioRa.ColeccionBiologiaUVG.Click("96;0");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar' at 505;26.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.BuscarInfo, new RecordItemIndex(1));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar.Click("505;26");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar1' at 2;18.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar1Info, new RecordItemIndex(2));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar1.Click("2;18");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar' at 449;9.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.BuscarInfo, new RecordItemIndex(3));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar.Click("449;9");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar' at 449;9.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.BuscarInfo, new RecordItemIndex(4));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar.Click("449;9");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Keyboard", "Key sequence 'A' with focus on 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar'.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.BuscarInfo, new RecordItemIndex(5));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar.PressKeys("A");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Keyboard", "Key sequence '{Down}' with focus on 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar'.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.BuscarInfo, new RecordItemIndex(6));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Buscar.PressKeys("{Down}");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.AmaziliaCandida' at 95;39.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.AmaziliaCandidaInfo, new RecordItemIndex(7));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.AmaziliaCandida.Click("95;39");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.AmaziliaCandida1' at 70;6.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.AmaziliaCandida1Info, new RecordItemIndex(8));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.AmaziliaCandida1.Click("70;6");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.None' at 566;554.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.NoneInfo, new RecordItemIndex(9));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.None.Click("566;554");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Keyboard", "Key sequence 'ma' with focus on 'ColeccionBiologiaUVGMozillaFirefox'.", repo.ColeccionBiologiaUVGMozillaFirefox.SelfInfo, new RecordItemIndex(10));
            repo.ColeccionBiologiaUVGMozillaFirefox.Self.EnsureVisible();
            Keyboard.Press("ma");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Keyboard", "Key sequence '{Back}' with focus on 'ColeccionBiologiaUVGMozillaFirefox'.", repo.ColeccionBiologiaUVGMozillaFirefox.SelfInfo, new RecordItemIndex(11));
            repo.ColeccionBiologiaUVGMozillaFirefox.Self.PressKeys("{Back}");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.SobreNosotros' at 119;3.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.SobreNosotrosInfo, new RecordItemIndex(12));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.SobreNosotros.Click("119;3");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.SobreNosotros' at 50;13.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.SobreNosotrosInfo, new RecordItemIndex(13));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.SobreNosotros.Click("50;13");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.Home' at 37;16.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.HomeInfo, new RecordItemIndex(14));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG.Home.Click("37;16");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.SobreNosotros1' at 52;38.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.SobreNosotros1Info, new RecordItemIndex(15));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.SobreNosotros1.Click("52;38");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left DoubleClick item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.LogIn' at 74;20.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.LogInInfo, new RecordItemIndex(16));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.LogIn.DoubleClick("74;20");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Text' at 66;27.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.TextInfo, new RecordItemIndex(17));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Text.Click("66;27");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'Firefox.FromThisWebsite' at 13;1.", repo.Firefox.FromThisWebsiteInfo, new RecordItemIndex(18));
            repo.Firefox.FromThisWebsite.Click("13;1");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Login1' at 127;35.", repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Login1Info, new RecordItemIndex(19));
            repo.ColeccionBiologiaUVGMozillaFirefox.ColeccionBiologiaUVG1.Login1.Click("127;35");
            Delay.Milliseconds(0);
            
        }

#region Image Feature Data
#endregion
    }
#pragma warning restore 0436
}
