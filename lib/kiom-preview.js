'use babel';

import KiomPreviewView from './kiom-preview-view';
import { CompositeDisposable } from 'atom';

export default {

  kiomPreviewView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.kiomPreviewView = new KiomPreviewView(state.kiomPreviewViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.kiomPreviewView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'kiom-preview:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.kiomPreviewView.destroy();
  },

  serialize() {
    return {
      kiomPreviewViewState: this.kiomPreviewView.serialize()
    };
  },

  toggle() {
    console.log('KiomPreview was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
